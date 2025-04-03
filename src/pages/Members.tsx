
import { useState } from "react";
import { membersData, MemberItem } from "@/data/members";
import MemberCard from "@/components/MemberCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get all unique expertise areas from members
  const allExpertise = Array.from(new Set(
    membersData.flatMap(member => member.expertise)
  ));
  
  // Filter members based on search term
  const filteredMembers = membersData.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.expertise.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-ctf-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Våra medlemmar</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Lär känna styrelsen och expertmedlemmarna i CTF-Kongress Sverige
          </p>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <Input
              placeholder="Sök efter namn, roll, organisation eller expertis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <Badge 
              variant="outline" 
              className={`cursor-pointer ${!searchTerm ? 'bg-ctf-teal text-white' : ''}`}
              onClick={() => setSearchTerm("")}
            >
              Alla
            </Badge>
            
            {allExpertise.map((expertise, index) => (
              <Badge 
                key={index}
                variant="outline"
                className={`cursor-pointer ${searchTerm === expertise ? 'bg-ctf-teal text-white' : ''}`}
                onClick={() => setSearchTerm(expertise)}
              >
                {expertise}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      
      {/* Members Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
          
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Inga medlemmar hittades med de angivna filtren.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-ctf-blue">Bli en del av gemenskapen</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            CTF-Kongress Sverige söker alltid efter passionerade individer med intresse för 
            cybersäkerhet och Capture The Flag-tävlingar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex bg-ctf-blue text-white px-6 py-3 rounded-md font-medium hover:bg-ctf-blue/80 transition-colors">
              Ansökningsinformation
            </a>
            <a href="#" className="inline-flex border border-ctf-blue text-ctf-blue px-6 py-3 rounded-md font-medium hover:bg-ctf-blue hover:text-white transition-colors">
              Kontakta oss
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Members;
