
import React, { useRef } from 'react';
import MapDisplay from './MapDisplay';
import MapTabs from './MapTabs';
import { TeamItem } from '@/data/teams';
import { CompetitionItem } from '@/data/competitions';

interface MapContainerProps {
  teams: TeamItem[];
  competitions?: CompetitionItem[];
}

const MapContainer: React.FC<MapContainerProps> = ({ teams, competitions = [] }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="w-full">
      <MapDisplay 
        mapContainerRef={mapContainerRef}
        teams={teams}
        competitions={competitions}
      />
    </div>
  );
};

export default MapContainer;
