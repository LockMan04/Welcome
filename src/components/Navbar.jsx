import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
        transition-all duration-300
        ${isScrolled ? 'backdrop-blur-md bg-white/80' : 'bg-white'}
        rounded-full shadow-lg max-w-6xl w-[90%] mx-auto`}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo với hiệu ứng rung lắc */}
        <div
          className="font-mono font-medium text-black text-base md:text-lg tracking-wider cursor-pointer transition-all duration-200 hover:font-bold select-none"
          style={{ transition: 'all 0.2s ease' }}
          onMouseEnter={(e) => {
            e.target.style.animation = 'violentShake 0.8s ease-in-out infinite';
            e.target.style.fontWeight = 'bold';
          }}
          onMouseLeave={(e) => {
            e.target.style.animation = '';
            e.target.style.fontWeight = '';
          }}
        >
          THANH TOAN
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            {t('nav.home')}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            {t('nav.projects')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
          >
            {t('nav.contact')}
          </button>
        </div>

        {/* Right Side - CTA and Language */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-xs md:text-sm px-3 md:px-4"
          >
            {t('nav.getInTouch')}
          </button>
          <button
            onClick={toggleLanguage}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black px-2 md:px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-200"
          >
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
