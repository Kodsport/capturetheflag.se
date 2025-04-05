
import { Link } from "react-router-dom";
import { contactInfo } from "@/data/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <h3 className="text-lg font-semibold mb-4">Länkar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ctf-teal transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-gray-300 hover:text-ctf-teal transition-colors">
                  Lag och tävingar
                </Link>
              </li>
              <li>
                <Link to="/what-is-ctf" className="text-gray-300 hover:text-ctf-teal transition-colors">
                  Vad är CTF?
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ctf-teal transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-ctf-teal transition-colors">{contactInfo.email}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© {currentYear} Kodsport Sverige. Alla rättigheter förbehållna.</p>
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
