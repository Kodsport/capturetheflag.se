
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { TeamItem } from '@/data/teams';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMapProps {
  teams: TeamItem[];
}

const TeamMap = ({ teams }: TeamMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [activeTeam, setActiveTeam] = useState<TeamItem | null>(null);
  const markersRef = useRef<{ [id: number]: mapboxgl.Marker }>({});

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || map.current) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [17.0, 62.0], // Center on Sweden
      zoom: 4.5,
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

    // Add new markers
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
        
        if (map.current) {
          map.current.flyTo({
            center: [team.location.lng, team.location.lat],
            zoom: 10,
            duration: 1500
          });
        }
      });

      // Store marker reference
      markersRef.current[team.id] = marker;
    });
  };

  // Update markers if teams change
  useEffect(() => {
    if (map.current && mapboxToken) {
      addMarkers();
    }
  }, [teams, mapboxToken]);

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
        </div>
      )}
    </div>
  );
};

export default TeamMap;
