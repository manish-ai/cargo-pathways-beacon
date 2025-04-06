
import { Truck, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Truck className="h-8 w-8 text-orange" />
              <span className="text-2xl font-bold">CargoPro</span>
            </div>
            <p className="text-white/70 mb-6">
              Global logistics solutions tailored to your business needs. Reliable, efficient, and cost-effective shipping worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-orange transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-orange transition-colors p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {["Road Freight", "Sea Freight", "Air Freight", "Warehousing", "Supply Chain", "Specialized Shipping"].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/70 hover:text-orange transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
                { name: "Privacy Policy", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-orange transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange mt-1" />
                <span className="text-white/70">123 Logistics Way, San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange" />
                <span className="text-white/70">info@cargopro.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © 2025 CargoPro Logistics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-orange text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-orange text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-orange text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
