
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MapTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MapTabs: React.FC<MapTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <Tabs 
      value={activeTab} 
      className="w-[300px] bg-white/90 backdrop-blur-sm rounded-md shadow-md"
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger 
          value="teams" 
          onClick={() => onTabChange('teams')}
        >
          Lag
        </TabsTrigger>
        <TabsTrigger 
          value="competitions" 
          onClick={() => onTabChange('competitions')}
        >
          Tävlingar
        </TabsTrigger>
        <TabsTrigger 
          value="all" 
          onClick={() => onTabChange('all')}
        >
          Alla
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default MapTabs;
