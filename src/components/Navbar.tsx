
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-ctf-blue text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-0 font-bold flex items-center">
            <span className="text-ctf-teal text-2xl">CTF</span>
            <span className="text-2xl">-Sverige</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-ctf-teal transition-colors">Hem</Link>
            <Link to="/what-is-ctf" className="hover:text-ctf-teal transition-colors">Vad är CTF?</Link>
            <Link to="/teams" className="hover:text-ctf-teal transition-colors">Lag och tävingar</Link>
            <Link to="/contact" className="hover:text-ctf-teal transition-colors">Kontakt</Link>
            <Button variant="outline" className="border-ctf-teal text-ctf-teal hover:bg-ctf-teal hover:text-white">
              Gå med i CTF-Kongress
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-ctf-dark">
            <div className="flex flex-col space-y-4 px-4 pb-4">
              <Link 
                to="/" 
                className="hover:text-ctf-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hem
              </Link>
              <Link 
                to="/teams" 
                className="hover:text-ctf-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Lag och tävlingar
              </Link>
              <Link 
                to="/what-is-ctf" 
                className="hover:text-ctf-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Vad är CTF?
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-ctf-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Button 
                variant="outline" 
                className="border-ctf-teal text-ctf-teal hover:bg-ctf-teal hover:text-white w-full"
              >
                Gå med i CTF-Kongress
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
