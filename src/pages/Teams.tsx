
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import TeamMap from "@/components/TeamMap";
import { teamsData } from '@/data/teams';
import { competitionsData } from '@/data/competitions';
import { ExternalLink } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');
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

  // Filter teams based on search
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="max-w-xl mx-auto">
            <Input
              placeholder={t('teams.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </section>
      
      {/* Teams Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
                  <p className="text-gray-600 mb-4">{team.description || "Ett aktivt CTF-lag i Sverige."}</p>
                  
            
                  
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
          
          {filteredTeams.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                {t('teams.no_teams')} "{searchTerm}".
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
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
          <Button className="bg-ctf-blue hover:bg-ctf-blue/80">
            {t('teams.missing_team.button')}
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Teams;
