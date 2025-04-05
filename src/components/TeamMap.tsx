
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { TeamItem } from '@/data/teams';
import { CompetitionItem } from '@/data/competitions';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TeamMapProps {
  teams: TeamItem[];
  competitions?: CompetitionItem[];
}

const TeamMap = ({ teams, competitions = [] }: TeamMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('pk.eyJ1IjoidmluZ3IiLCJhIjoiY205NDh1eXg2MHB4bjJrczVhcmFqNWFzNCJ9.vp1jVLNUV-kVmeHbKzTEug');
  const [activeTeam, setActiveTeam] = useState<TeamItem | null>(null);
  const [activeCompetition, setActiveCompetition] = useState<CompetitionItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('teams');
  const markersRef = useRef<{ [id: string]: mapboxgl.Marker }>({});

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || map.current) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
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
  }, [mapboxToken]);

  const addMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Add team markers
    teams.forEach(team => {
      if (!map.current) return;

      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'team-marker';
      el.style.backgroundColor = '#1A3A6E';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';

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

      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'competition-marker';
      el.style.backgroundColor = '#ea384c'; // Red color for competitions
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';

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

  // Handle tab change to show/hide markers
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

  // Update markers if teams or competitions change
  useEffect(() => {
    if (map.current && mapboxToken) {
      addMarkers();
      handleTabChange(activeTab);
    }
  }, [teams, competitions, mapboxToken]);

  // Handle token input
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('mapboxToken') as HTMLInputElement;
    
    if (input.value) {
      setMapboxToken(input.value);
      localStorage.setItem('mapboxToken', input.value);
    }
  };

  // Check for stored token on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('mapboxToken');
    if (storedToken) {
      setMapboxToken(storedToken);
    }
  }, []);

  return (
    <div className="w-full">
      {!mapboxToken ? (
        <Card className="max-w-md mx-auto mt-8">
          <CardContent className="pt-6">
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Mapbox Token Required</h3>
                <p className="text-sm text-gray-500">
                  To view the interactive map, please enter your Mapbox public token. 
                  You can get one for free at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-ctf-teal hover:underline">mapbox.com</a>.
                </p>
                <input
                  type="text"
                  name="mapboxToken"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Mapbox public token"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ctf-blue text-white py-2 rounded-md hover:bg-ctf-blue/90 transition-colors"
              >
                Submit Token
              </button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="relative">
          <div className="absolute top-4 left-4 z-10">
            <Tabs defaultValue="teams" className="w-[300px] bg-white/90 backdrop-blur-sm rounded-md shadow-md">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="teams" onClick={() => handleTabChange('teams')}>Lag</TabsTrigger>
                <TabsTrigger value="competitions" onClick={() => handleTabChange('competitions')}>Tävlingar</TabsTrigger>
                <TabsTrigger value="all" onClick={() => handleTabChange('all')}>Alla</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div 
            ref={mapContainer} 
            className="w-full h-[70vh] rounded-lg shadow-md"
          />
          
          {activeTeam && (
            <div className="absolute left-4 bottom-4 w-80 bg-white p-4 rounded-lg shadow-lg z-10">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-ctf-blue">{activeTeam.name}</h3>
                <button 
                  onClick={() => setActiveTeam(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">{activeTeam.city}, {activeTeam.country}</p>
              <p className="text-sm mt-2">{activeTeam.description}</p>
              <div className="mt-3">
                <span className="text-sm font-medium">Members: {activeTeam.members}</span>
                {activeTeam.website && (
                  <div className="mt-1">
                    <a 
                      href={activeTeam.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-ctf-teal hover:underline"
                    >
                      Visit website
                    </a>
                  </div>
                )}
                {activeTeam.achievements && activeTeam.achievements.length > 0 && (
                  <div className="mt-2">
                    <span className="text-sm font-medium">Notable achievements:</span>
                    <ul className="text-xs mt-1 list-disc list-inside">
                      {activeTeam.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeCompetition && (
            <div className="absolute left-4 bottom-4 w-80 bg-white p-4 rounded-lg shadow-lg z-10">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-red-600">{activeCompetition.name}</h3>
                <button 
                  onClick={() => setActiveCompetition(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">{activeCompetition.city}, {activeCompetition.country}</p>
              <p className="text-sm mt-1">Datum: {new Date(activeCompetition.date).toLocaleDateString('sv-SE')}</p>
              {activeCompetition.format && (
                <p className="text-sm mt-1">Format: {activeCompetition.format}</p>
              )}
              <p className="text-sm mt-2">{activeCompetition.description}</p>
              {activeCompetition.website && (
                <div className="mt-3">
                  <a 
                    href={activeCompetition.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-ctf-teal hover:underline"
                  >
                    Visit website
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamMap;
