
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full px-16 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-portfolio-blue-dark">My<span className="text-yellow-300">Portfolio</span></a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="font-medium text-portfolio-gray-dark hover:text-yellow-300 transition-colors">Home</a>
          <a href="#about" className="font-medium text-portfolio-gray-dark hover:text-yellow-300 transition-colors">About</a>
          <a href="#projects" className="font-medium text-portfolio-gray-dark hover:text-yellow-300 transition-colors">Projects</a>
          <a href="#skills" className="font-medium text-portfolio-gray-dark hover:text-yellow-300 transition-colors">Skills</a>
          <a href="#contact" className="font-medium text-portfolio-gray-dark hover:text-yellow-300 transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-gray-dark hover:text-portfolio-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-24">
            <a 
              href="#home" 
              className="text-portfolio-gray-dark hover:text-portfolio-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-portfolio-gray-dark hover:text-portfolio-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-portfolio-gray-dark hover:text-portfolio-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-portfolio-gray-dark hover:text-portfolio-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-portfolio-gray-dark hover:text-portfolio-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
