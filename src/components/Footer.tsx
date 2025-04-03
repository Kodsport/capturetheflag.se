
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ctf-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-ctf-teal">CTF</span>-Kongress Sverige
            </h3>
            <p className="text-gray-300">
              Främjar svenska CTF-tävlingar och utbildning inom cybersäkerhet.
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
                <Link to="/members" className="text-gray-300 hover:text-ctf-teal transition-colors">
                  Medlemmar
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
              <li>Email: info@ctf-kongress.se</li>
              <li>Telefon: 08-123 45 67</li>
              <li>Stockholm, Sverige</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} CTF-Kongress Sverige. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
