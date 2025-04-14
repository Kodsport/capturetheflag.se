
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import TeamMap from "@/components/TeamMap";
import { teamsData } from '@/data/teams';
import { competitionsData } from '@/data/competitions';
import { ExternalLink, Trophy, Flag } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const { t } = useTranslation();

  // Simulate fetching teams data
  const { data: teams } = useQuery({
    queryKey: ['teams'],
    queryFn: () => Promise.resolve(teamsData),
    initialData: teamsData,
  });

  // Simulate fetching competitions data
  const { data: competitions } = useQuery({
    queryKey: ['competitions'],
    queryFn: () => Promise.resolve(competitionsData),
    initialData: competitionsData,
  });

  // Filter teams based on search and active tab
  const filteredTeams = teams.filter(team => 
    (activeTab === 'all' || activeTab === 'teams') &&
    (team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.country.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Filter competitions based on search and active tab
  const filteredCompetitions = competitions.filter(competition => 
    (activeTab === 'all' || activeTab === 'competitions') &&
    (competition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    competition.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (competition.country && competition.country.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  // Combined filtered results
  const hasResults = filteredTeams.length > 0 || filteredCompetitions.length > 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-ctf-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('teams.title')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('teams.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-8">
        <div className="container mx-auto px-4 mb-8">
          <div className="h-[500px] rounded-lg overflow-hidden shadow-md border border-gray-200">
            <TeamMap teams={teams} competitions={competitions} />
          </div>
        </div>
      </section>
      
      {/* Search & Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-1/2">
              <Input
                placeholder={t('teams.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab} value={activeTab}>
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="all">{t('teams.filters.all')}</TabsTrigger>
                  <TabsTrigger value="teams">{t('teams.filters.teams')}</TabsTrigger>
                  <TabsTrigger value="competitions">{t('teams.filters.competitions')}</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* Teams and Competitions Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Display Teams */}
          {filteredTeams.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-ctf-blue flex items-center">
                <Trophy className="mr-2 h-6 w-6" />
                {t('teams.section_teams')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTeams.map(team => (
                  <Card key={team.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{team.name}</CardTitle>
                      <CardDescription>
                        {[team.city, team.country].filter(a => !!a).join(', ')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{team.description || t('teams.team.default_description')}</p>
                      
                      {team.achievements.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-500 mb-2">{t('teams.team.achievements')}</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            {team.achievements.slice(0, 3).map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      {team.website && (
                        <a 
                          href={team.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ctf-blue hover:text-ctf-teal transition-colors"
                        >
                          {t('teams.team.visit_website')} <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Display Competitions */}
          {filteredCompetitions.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-red-600 flex items-center">
                <Flag className="mr-2 h-6 w-6" />
                {t('teams.section_competitions')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCompetitions.map(competition => (
                  <Card key={competition.id} className="overflow-hidden hover:shadow-lg transition-shadow border-t-2 border-red-500">
                    <CardHeader>
                      <CardTitle>{competition.name}</CardTitle>
                      <CardDescription>
                        {[competition.city, competition.country].filter(a => !!a).join(', ')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{competition.description || t('teams.competition.default_description')}</p>
                      
                      {competition.format && (
                        <div className="mt-2">
                          <Badge variant="outline" className="mr-2">
                            {competition.format}
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      {competition.website && (
                        <a 
                          href={competition.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
                        >
                          {t('teams.team.visit_website')} <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {!hasResults && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                {t('teams.no_results')} "{searchTerm}".
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setActiveTab('all');
                }}
                className="mt-4"
              >
                {t('teams.clear_search')}
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Join Call to Action */}
      <section className="py-16 bg-ctf-light border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-ctf-blue">{t('teams.missing_team.title')}</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            {t('teams.missing_team.description')}
          </p>
          <Link to="/ctf-kongress">
            <Button className="bg-ctf-blue hover:bg-ctf-blue/80">
              {t('teams.missing_team.button')}
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Teams;
