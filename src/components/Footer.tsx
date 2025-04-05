
import { Link } from "react-router-dom";
import { contactInfo } from "@/data/contact";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-ctf-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-ctf-teal">CTF</span>-Sverige
            </h3>
            <p className="text-gray-300">
              CTF-Kongress är ett nätverk som främjar svenska CTF-scenen.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ctf-teal transition-colors">
                  {t('common.home')}
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-gray-300 hover:text-ctf-teal transition-colors">
                  {t('common.teams')}
                </Link>
              </li>
              <li>
                <Link to="/what-is-ctf" className="text-gray-300 hover:text-ctf-teal transition-colors">
                  {t('common.whatIsCTF')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ctf-teal transition-colors">
                  {t('common.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{t('contact.contact_info.email')}: <a href={`mailto:${contactInfo.email}`} className="hover:text-ctf-teal transition-colors">{contactInfo.email}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">{t('footer.copyright', { year: currentYear })}</p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            {contactInfo.social?.github && (
              <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ctf-teal">
                GitHub
              </a>
            )}
            {contactInfo.social?.twitter && (
              <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ctf-teal">
                Twitter
              </a>
            )}
            {contactInfo.social?.linkedin && (
              <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ctf-teal">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
