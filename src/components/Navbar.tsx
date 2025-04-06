
import { useState, useEffect } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-navy-light" />
            <span className="text-2xl font-bold text-navy-dark">CargoPro</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-navy-dark font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-navy-dark font-medium transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-navy-dark font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-navy-dark font-medium transition-colors">Contact</a>
            <Button className="bg-orange hover:bg-orange-dark text-white">Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-6">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-navy-dark font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-navy-dark font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-navy-dark font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-navy-dark font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-orange hover:bg-orange-dark text-white w-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
