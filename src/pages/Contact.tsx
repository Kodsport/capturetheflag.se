
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/data/contact";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-ctf-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Contact Info and Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-ctf-blue">{t('contact.about.title')}</h2>
              <p className="text-gray-700 mb-8">
                {t('contact.about.description')}
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-ctf-blue">{t('contact.about.vision_title')}</h3>
              <p className="text-gray-700 mb-8">
                {t('contact.about.vision')}
              </p>
              
              
            </div>
            <div className="">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{t('contact.contact_info.title')}</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="font-medium w-24">{t('contact.contact_info.email')}:</span>
                        <a href={`mailto:${contactInfo.email}`} className="text-ctf-teal hover:underline">
                          {contactInfo.email}
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                  <CardContent className="p-6">
                    Hemsidan har skapats och drivs av <a className="text-ctf-teal" href="http://kodsport.se">Kodsport Sverige</a>.
                  </CardContent>
                </Card>
              </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
