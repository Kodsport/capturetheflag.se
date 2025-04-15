
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { TeamItem } from '@/data/teams';
import { CompetitionItem } from '@/data/competitions';
import { Card, CardContent } from '@/components/ui/card';
import MapTabs from './MapTabs';
import TeamPopup from './TeamPopup';
import CompetitionPopup from './CompetitionPopup';

interface MapDisplayProps {
  mapContainerRef: React.RefObject<HTMLDivElement>;
  teams: TeamItem[];
  competitions: CompetitionItem[];
}

const MapDisplay: React.FC<MapDisplayProps> = ({ 
  mapContainerRef,
  teams,
  competitions
}) => {
  const map = useRef<mapboxgl.Map | null>(null);
  const [activeTeam, setActiveTeam] = useState<TeamItem | null>(null);
  const [activeCompetition, setActiveCompetition] = useState<CompetitionItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('teams');
  const markersRef = useRef<{ [id: string]: mapboxgl.Marker }>({});

  // Hardcoded Mapbox token
  const mapboxToken = 'pk.eyJ1IjoidmluZ3IiLCJhIjoiY205NDh1eXg2MHB4bjJrczVhcmFqNWFzNCJ9.vp1jVLNUV-kVmeHbKzTEug';

  useEffect(() => {
    if (!mapContainerRef.current || map.current) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [17.0, 56.0], // Center on Sweden
      zoom: 3.5,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add markers when map loads
    map.current.on('load', () => {
      addMarkers();
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  const createMarkerElement = (type: 'team' | 'competition', item: TeamItem | CompetitionItem) => {
    // Create container
    const el = document.createElement('div');
    el.className = `${type}-marker`;
    el.style.cursor = 'pointer';
    
    // If item has a logo, use it
    if (item.logo) {
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = type === 'team' ? '#1A3A6E' : '#FFFFFF';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
      el.style.backgroundImage = `url(${item.logo})`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
      el.style.backgroundRepeat = 'no-repeat';
    } else {
      // Fallback to colored circle
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = type === 'team' ? '#1A3A6E' : '#ea384c';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    }
    
    return el;
  };

  const addMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Add team markers
    teams.forEach(team => {
      if (!map.current) return;

      // Create marker element
      const el = createMarkerElement('team', team);

      // Create and add marker
      const marker = new mapboxgl.Marker(el)
        .setLngLat([team.location.lng, team.location.lat])
        .addTo(map.current);

      // Set up click event
      el.addEventListener('click', () => {
        setActiveTeam(team);
        setActiveCompetition(null);
        
        if (map.current) {
          map.current.flyTo({
            center: [team.location.lng, team.location.lat],
            zoom: 10,
            duration: 1500
          });
        }
      });

      // Store marker reference
      markersRef.current[`team-${team.id}`] = marker;
    });

    // Add competition markers
    competitions.forEach(competition => {
      if (!map.current) return;

      // Create marker element
      const el = createMarkerElement('competition', competition);

      // Create and add marker
      const marker = new mapboxgl.Marker(el)
        .setLngLat([competition.location.lng, competition.location.lat])
        .addTo(map.current);

      // Set up click event
      el.addEventListener('click', () => {
        setActiveCompetition(competition);
        setActiveTeam(null);
        
        if (map.current) {
          map.current.flyTo({
            center: [competition.location.lng, competition.location.lat],
            zoom: 10,
            duration: 1500
          });
        }
      });

      // Store marker reference
      markersRef.current[`competition-${competition.id}`] = marker;
    });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setActiveTeam(null);
    setActiveCompetition(null);
    
    // Show/hide markers based on active tab
    if (map.current) {
      Object.entries(markersRef.current).forEach(([id, marker]) => {
        if (tab === 'all' || 
            (tab === 'teams' && id.startsWith('team')) || 
            (tab === 'competitions' && id.startsWith('competition'))) {
          marker.getElement().style.display = 'block';
        } else {
          marker.getElement().style.display = 'none';
        }
      });
    }
  };

  useEffect(() => {
    if (map.current) {
      addMarkers();
      handleTabChange(activeTab);
    }
  }, [teams, competitions]);

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-10">
        <MapTabs 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />
      </div>
      
      <div 
        ref={mapContainerRef} 
        className="w-full h-[70vh] rounded-lg shadow-md"
      />
      
      {activeTeam && (
        <TeamPopup 
          team={activeTeam} 
          onClose={() => setActiveTeam(null)} 
        />
      )}

      {activeCompetition && (
        <CompetitionPopup 
          competition={activeCompetition} 
          onClose={() => setActiveCompetition(null)} 
        />
      )}
    </div>
  );
};

export default MapDisplay;
