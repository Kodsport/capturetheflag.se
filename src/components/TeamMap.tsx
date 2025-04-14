
import React from 'react';
import { TeamItem } from '@/data/teams';
import { CompetitionItem } from '@/data/competitions';
import MapContainer from './map/MapContainer';

interface TeamMapProps {
  teams: TeamItem[];
  competitions?: CompetitionItem[];
}

const TeamMap = ({ teams, competitions = [] }: TeamMapProps) => {
  return <MapContainer teams={teams} competitions={competitions} />;
};

export default TeamMap;
