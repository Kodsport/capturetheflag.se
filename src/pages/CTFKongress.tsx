
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Globe } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

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
              
              <div className="flex items-center mb-8">
                <Users className="h-6 w-6 mr-3 text-ctf-teal" />
                <span className="text-lg">{t('ctfkongress.network.membership')}</span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-ctf-blue">{t('ctfkongress.network.goals.title')}</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>{t('ctfkongress.network.goals.item1')}</li>
                  <li>{t('ctfkongress.network.goals.item2')}</li>
                  <li>{t('ctfkongress.network.goals.item3')}</li>
                </ul>
              </div>
            </div>
            
            {/* Network Stats */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-ctf-blue">{t('ctfkongress.network.stats.title')}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">{t('ctfkongress.network.stats.teams')}</span>
                      <span className="font-semibold">15+</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">{t('ctfkongress.network.stats.members')}</span>
                      <span className="font-semibold">200+</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">{t('ctfkongress.network.stats.founded')}</span>
                      <span className="font-semibold">2020</span>
                    </div>
                  </div>
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
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ctf-teal rounded-full mr-2"></span>
                      {t('ctfkongress.event.activities.item4')}
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
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  {t('ctfkongress.event.faq.q3')}
                </AccordionTrigger>
                <AccordionContent>
                  {t('ctfkongress.event.faq.a3')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                {t('ctfkongress.event.next_event')}
              </p>
              <div className="inline-block bg-ctf-teal text-white px-6 py-3 rounded-lg">
                <Globe className="inline-block mr-2 h-5 w-5" />
                <span className="font-semibold">{t('ctfkongress.event.location')}, {t('ctfkongress.event.date')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CTFKongress;
