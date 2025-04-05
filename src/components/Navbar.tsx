
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

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
            <Link to="/" className="hover:text-ctf-teal transition-colors">{t('common.home')}</Link>
            <Link to="/what-is-ctf" className="hover:text-ctf-teal transition-colors">{t('common.whatIsCTF')}</Link>
            <Link to="/teams" className="hover:text-ctf-teal transition-colors">{t('common.teams')}</Link>
            <Link to="/contact" className="hover:text-ctf-teal transition-colors">{t('common.contact')}</Link>
            <Button variant="outline" className="border-ctf-teal text-ctf-teal hover:bg-ctf-teal hover:text-white">
              {t('common.join')}
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-white ml-2"
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
                {t('common.home')}
              </Link>
              <Link 
                to="/teams" 
                className="hover:text-ctf-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.teams')}
              </Link>
              <Link 
                to="/what-is-ctf" 
                className="hover:text-ctf-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.whatIsCTF')}
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-ctf-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.contact')}
              </Link>
              <Button 
                variant="outline" 
                className="border-ctf-teal text-ctf-teal hover:bg-ctf-teal hover:text-white w-full"
              >
                {t('common.join')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
