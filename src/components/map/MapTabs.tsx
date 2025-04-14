
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from 'react-i18next';

interface MapTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MapTabs: React.FC<MapTabsProps> = ({ activeTab, onTabChange }) => {
  const { t } = useTranslation();
  
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
          {t('teams.filters.teams')}
        </TabsTrigger>
        <TabsTrigger 
          value="competitions" 
          onClick={() => onTabChange('competitions')}
        >
          {t('teams.filters.competitions')}
        </TabsTrigger>
        <TabsTrigger 
          value="all" 
          onClick={() => onTabChange('all')}
        >
          {t('teams.filters.all')}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default MapTabs;
