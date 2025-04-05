
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { contactInfo } from "@/data/contact";

const Contact = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-ctf-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontakta oss</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Har du frågor eller vill veta mer om CTF-Kongress? Vi hjälper dig gärna!
          </p>
        </div>
      </section>
      
      {/* Contact Info and Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-ctf-blue">Om oss</h2>
              <p className="text-gray-700 mb-8">
                CTF-Kongress är ett nätverk som samlar 
                Capture The Flag-lag och tävlingsorganisatörer i hela Sverige. Vi möts i forumet på Discord och vid årliga eventet CTF-Kongress.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-ctf-blue">Vision</h3>
              <p className="text-gray-700 mb-8">
                Vårt mål är att bygga en stark CTF-scen i Sverige genom att dela kunskap och främja tävingsformen.
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Kontaktinformation</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="font-medium w-24">Email:</span>
                        <a href={`mailto:${contactInfo.email}`} className="text-ctf-teal hover:underline">
                          {contactInfo.email}
                        </a>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium w-24">Discord Server:</span>
                        <a href={contactInfo.discord_invite_url} className="text-ctf-teal hover:underline">
                          {contactInfo.discord_invite_url}
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

              </div>
            </div>
            
          </div>
        </div>
      </section>
      

      
      <Footer />
    </div>
  );
};

export default Contact;
