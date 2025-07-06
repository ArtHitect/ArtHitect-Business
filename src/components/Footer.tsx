import { Heart } from 'lucide-react';
import Logo from '../images/Logo 3.png'; // Assume you have a logo component or SVG for your logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* Replace emojis with the actual logo used in Services */}
              <a href="/services" aria-label="Go to Services">
                <img src={Logo} alt="ArtHitect Logo" className="w-14 h-14 mr-2" />
              </a>
              <span className="text-xl font-bold">ArtHitect</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting beautiful, responsive websites that convert visitors into customers. 
              Your success is my priority.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/portfolio#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio Websites
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#business"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={e => {
                    // For smooth scroll if on the portfolio page
                    if (window.location.pathname === '/portfolio') {
                      e.preventDefault();
                      document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Business Websites
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#ecommerce"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={e => {
                    if (window.location.pathname === '/portfolio') {
                      e.preventDefault();
                      document.getElementById('ecommerce')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  E-commerce Stores
                </a>
              </li>
              <li>
                <a
                  href="/portfolio#redesign"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={e => {
                    if (window.location.pathname === '/portfolio') {
                      e.preventDefault();
                      document.getElementById('redesign')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Website Redesign
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by ArtHitect © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;