
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Globe, MessageCircle } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { contactInfo } from "@/data/contact";

const CTFKongress = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-ctf-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('ctfkongress.title')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('ctfkongress.subtitle')}
          </p>
        </div>
      </section>
      
      {/* About the Network */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Network Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-ctf-blue">{t('ctfkongress.network.title')}</h2>
              <p className="text-gray-700 mb-6">
                {t('ctfkongress.network.description')}
              </p>
              
              {false && (<div className="flex items-center mb-8">
                <Users className="h-6 w-6 mr-3 text-ctf-teal" />
                <span className="text-lg">{t('ctfkongress.network.membership')}</span>
              </div>)}
              
              <div className="bg-gray-50 rounded-lg pt-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-ctf-blue">{t('ctfkongress.network.goals.title')}</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>{t('ctfkongress.network.goals.item1')}</li>
                  <li>{t('ctfkongress.network.goals.item2')}</li>
                  <li>{t('ctfkongress.network.goals.item3')}</li>
                </ul>
              </div>
            </div>
            
            {/* Discord Call to Action */}
            <div>
              <Card className="bg-gradient-to-br from-purple-500 to-ctf-blue border-none shadow-lg overflow-hidden">
                <CardContent className="p-6 text-white">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-7 w-7 mr-3 text-white" />
                    <h3 className="text-xl font-bold">{t('ctfkongress.network.join.title')}</h3>
                  </div>
                  
                  <p className="mb-6 text-white/90">
                    {t('ctfkongress.network.join.description')}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">{t('ctfkongress.network.join.requirements_title')}</h4>
                    <p className="text-sm text-white/80">
                      {t('ctfkongress.network.join.requirements_desc')}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">{t('ctfkongress.network.join.discord_title')}</h4>
                    <p className="text-sm text-white/80">
                      {t('ctfkongress.network.join.discord_desc')}
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full bg-white text-ctf-blue hover:bg-white/90 hover:text-ctf-blue font-semibold"
                    onClick={() => window.open(contactInfo.discord_invite_url, '_blank')}
                  >
                    {t('ctfkongress.network.join.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Annual Event */}
      <section className="py-16 bg-ctf-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Calendar className="h-8 w-8 mr-3 text-ctf-teal" />
              <h2 className="text-2xl font-bold text-ctf-blue">{t('ctfkongress.event.title')}</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              {t('ctfkongress.event.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-ctf-blue">{t('ctfkongress.event.details.title')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="font-medium w-24">{t('ctfkongress.event.details.frequency')}:</span>
                      <span>{t('ctfkongress.event.details.frequency_value')}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-24">{t('ctfkongress.event.details.duration')}:</span>
                      <span>{t('ctfkongress.event.details.duration_value')}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-24">{t('ctfkongress.event.details.location')}:</span>
                      <span>{t('ctfkongress.event.details.location_value')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-ctf-blue">{t('ctfkongress.event.activities.title')}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ctf-teal rounded-full mr-2"></span>
                      {t('ctfkongress.event.activities.item1')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ctf-teal rounded-full mr-2"></span>
                      {t('ctfkongress.event.activities.item2')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ctf-teal rounded-full mr-2"></span>
                      {t('ctfkongress.event.activities.item3')}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <h3 className="text-xl font-semibold mb-6 text-ctf-blue">{t('ctfkongress.event.faq.title')}</h3>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  {t('ctfkongress.event.faq.q1')}
                </AccordionTrigger>
                <AccordionContent>
                  {t('ctfkongress.event.faq.a1')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  {t('ctfkongress.event.faq.q2')}
                </AccordionTrigger>
                <AccordionContent>
                  {t('ctfkongress.event.faq.a2')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
           
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CTFKongress;
