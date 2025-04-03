
import { useState } from "react";
import { teamsData } from "@/data/teams";
import TeamMap from "@/components/TeamMap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  
  // Filter teams based on search term
  const filteredTeams = teamsData.filter(team => 
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">CTF-lag i Sverige</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Utforska CTF-lag i Sverige och se var de är baserade
          </p>
        </div>
      </section>
      
      {/* Search and View Toggle */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <Input
                placeholder="Sök efter lag, stad eller land..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant={viewMode === 'map' ? 'default' : 'outline'}
                onClick={() => setViewMode('map')}
                className={viewMode === 'map' ? 'bg-ctf-blue text-white' : ''}
              >
                Karta
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-ctf-blue text-white' : ''}
              >
                Lista
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-10 flex-grow">
        <div className="container mx-auto px-4">
          {viewMode === 'map' ? (
            <TeamMap teams={filteredTeams} />
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lagnamn</TableHead>
                    <TableHead>Plats</TableHead>
                    <TableHead>Medlemmar</TableHead>
                    <TableHead className="hidden md:table-cell">Prestationer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTeams.map((team) => (
                    <TableRow key={team.id}>
                      <TableCell className="font-medium">{team.name}</TableCell>
                      <TableCell>{team.city}, {team.country}</TableCell>
                      <TableCell>{team.members}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {team.achievements && team.achievements.length > 0 ? (
                          <span>{team.achievements[0]}</span>
                        ) : (
                          <span className="text-gray-400">Ingen information</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {filteredTeams.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">Inga lag hittades med de angivna filtren.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-ctf-blue">Registrera ditt lag</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Är ditt lag inte listat? Kontakta oss för att registrera ditt CTF-lag 
            i vår nationella databas.
          </p>
          <div>
            <a href="/contact" className="inline-flex bg-ctf-blue text-white px-6 py-3 rounded-md font-medium hover:bg-ctf-blue/80 transition-colors">
              Kontakta oss
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Teams;
