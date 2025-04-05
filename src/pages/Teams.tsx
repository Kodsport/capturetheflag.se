
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import TeamMap from "@/components/TeamMap";
import { teamsData } from '@/data/teams';
import { ExternalLink } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Simulate fetching teams data
  const { data: teams } = useQuery({
    queryKey: ['teams'],
    queryFn: () => Promise.resolve(teamsData),
    initialData: teamsData,
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">CTF-team i Sverige</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Upptäck aktiva Capture The Flag-team runtom i landet och se var de finns
          </p>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-8">
        <div className="container mx-auto px-4 mb-8">
          <div className="h-[500px] rounded-lg overflow-hidden shadow-md border border-gray-200">
            <TeamMap teams={teams} />
          </div>
        </div>
      </section>
      
      {/* Search & Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <Input
              placeholder="Sök efter team, stad eller land..."
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
                    {team.city}, {team.country}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{team.description || "Ett aktivt CTF-team i Sverige."}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-ctf-blue">{team.members} medlemmar</Badge>
                  </div>
                  
                  {team.achievements && team.achievements.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Prestationer</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        {team.achievements.slice(0, 3).map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  {team.website ? (
                    <a 
                      href={team.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-ctf-blue hover:text-ctf-teal transition-colors"
                    >
                      Besök webbplats <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">Ingen webbplats tillgänglig</span>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredTeams.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Inga team hittades med söktermen "{searchTerm}".
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
                className="mt-4"
              >
                Rensa sökning
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Join Call to Action */}
      <section className="py-16 bg-ctf-light border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-ctf-blue">Saknas ditt team?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Är du med i ett CTF-team som inte finns med på listan? Kontakta oss för att lägga till ditt team i vår databas.
          </p>
          <Button className="bg-ctf-blue hover:bg-ctf-blue/80">
            Registrera ditt team
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Teams;
