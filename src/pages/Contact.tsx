
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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Meddelande skickat",
      description: "Tack för ditt meddelande. Vi återkommer så snart som möjligt.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-ctf-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontakta oss</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Har du frågor eller vill veta mer om CTF-Kongress Sverige? Vi hjälper dig gärna!
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
                CTF-Kongress Sverige är en ideell organisation dedikerad till att främja 
                Capture The Flag-tävlingar och cybersäkerhetsutbildning i hela Sverige. 
                Vi arbetar för att stödja utbildning, forskning och professionell utveckling 
                inom cybersäkerhetsområdet.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-ctf-blue">Vårt uppdrag</h3>
              <p className="text-gray-700 mb-8">
                Vårt mål är att bygga ett starkt nätverk av cybersäkerhetsexperter, utbilda 
                nästa generation av säkerhetsspecialister och organisera högkvalitativa 
                CTF-tävlingar och evenemang.
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
                        <span className="font-medium w-24">Adress:</span>
                        <span>
                          {contactInfo.address.street}<br />
                          {contactInfo.address.postal} {contactInfo.address.city}<br />
                          {contactInfo.address.country}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Öppettider</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex justify-between">
                        <span>Måndag - Fredag:</span>
                        <span>09:00 - 17:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Lördag - Söndag:</span>
                        <span>Stängt</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-ctf-blue">Skicka ett meddelande</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Namn
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      E-post
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Ämne
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Meddelande
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-ctf-blue hover:bg-ctf-blue/80">
                  Skicka meddelande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (placeholder) */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8 text-ctf-blue">Hitta till oss</h2>
          <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Kartan kan integreras här</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
