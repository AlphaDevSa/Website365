import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, MapPin, MessageCircle } from 'lucide-react';
import SEO from './SEO';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO />
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2 text-blue-400" /> support@website365.co.za</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2 text-blue-400" /> 086 199 5070</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2 text-blue-400" /> Mobile: +27 83 600 0152</span>
          </div>
          <div className="flex items-center">
            <a 
              href="https://wa.me/27836000152" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold transition-colors shadow-lg shadow-green-900/20"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white shadow-sm border-b border-gray-100'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/images/logo/logo.png" alt="Website365 - Web Hosting, Domains & Design" className="h-14 w-auto" onError={(e) => e.target.src = 'https://via.placeholder.com/150x50?text=Website365'} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/" className={`font-medium text-sm ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</Link>
              
              <div className="relative group">
                <button className="flex items-center font-medium text-sm text-gray-700 hover:text-blue-600">
                  Domains <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                  <div className="py-2">
                    <Link to="/domains" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Domain Search</Link>
                    <Link to="/domains/registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Registration</Link>
                    <Link to="/domains/transfer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Transfer</Link>
                    <Link to="/domains/reseller" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Domain Reseller</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center font-medium text-sm text-gray-700 hover:text-blue-600">
                  Web Hosting <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                  <div className="py-2">
                    <Link to="/hosting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">All Hosting</Link>
                    <Link to="/hosting/directadmin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">DirectAdmin Hosting</Link>
                    <Link to="/hosting/cpanel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">cPanel Hosting</Link>
                    <Link to="/hosting/wordpress" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">WordPress Hosting</Link>
                    <Link to="/hosting/email" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Email Hosting</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center font-medium text-sm text-gray-700 hover:text-blue-600">
                  Reseller Hosting <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                  <div className="py-2">
                    <Link to="/hosting/reseller" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">All Reseller</Link>
                    <Link to="/hosting/reseller/cpanel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">cPanel Reseller</Link>
                    <Link to="/hosting/reseller/master" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Master Reseller</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center font-medium text-sm text-gray-700 hover:text-blue-600">
                  Web Design <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                  <div className="py-2">
                    <Link to="/web-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">All Web Design</Link>
                    <Link to="/web-design/website" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Website Design</Link>
                    <Link to="/web-design/development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Development</Link>
                    <Link to="/web-design/maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Website Maintenance</Link>
                    <Link to="/web-design/ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">eCommerce</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center font-medium text-sm text-gray-700 hover:text-blue-600">
                  Servers <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                  <div className="py-2">
                    <Link to="/servers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">All Servers</Link>
                    <Link to="/servers/vps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">VPS Servers</Link>
                  </div>
                </div>
              </div>

              <Link to="/partners" className={`font-medium text-sm ${location.pathname === '/partners' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Partners</Link>
              <Link to="/contact" className={`font-medium text-sm ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Contact</Link>
            </nav>

            {/* CTA Button moved to top bar */}

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" className="block py-2 text-gray-700 font-medium" onClick={toggleMobileMenu}>Home</Link>
              <div className="py-2 border-t border-gray-50">
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Domains</span>
                <Link to="/domains" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>Search</Link>
                <Link to="/domains/registration" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>Registration</Link>
                <Link to="/domains/transfer" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>Transfer</Link>
                <Link to="/domains/reseller" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>Domain Reseller</Link>
              </div>
              <div className="py-2 border-t border-gray-50">
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Hosting</span>
                <Link to="/hosting" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>All Hosting</Link>
                <Link to="/hosting/directadmin" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>DirectAdmin</Link>
                <Link to="/hosting/cpanel" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>cPanel</Link>
                <Link to="/hosting/wordpress" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>WordPress</Link>
                <Link to="/hosting/email" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>Email</Link>
              </div>
              <div className="py-2 border-t border-gray-50">
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Reseller Hosting</span>
                <Link to="/hosting/reseller" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>All Reseller</Link>
                <Link to="/hosting/reseller/cpanel" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>cPanel Reseller</Link>
                <Link to="/hosting/reseller/master" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>Master Reseller</Link>
              </div>
              <div className="py-2 border-t border-gray-50">
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Server Hosting</span>
                <Link to="/servers/vps" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>VPS Hosting</Link>
              </div>
              <div className="py-2 border-t border-gray-50">
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Web Design</span>
                <Link to="/web-design" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>All Web Design</Link>
                <Link to="/web-design/website" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>Website Design</Link>
                <Link to="/web-design/development" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>Development</Link>
                <Link to="/web-design/maintenance" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>Website Maintenance</Link>
                <Link to="/web-design/ecommerce" className="block py-1 pl-4 text-gray-600" onClick={toggleMobileMenu}>eCommerce</Link>
              </div>
              <Link to="/partners" className="block py-2 text-gray-700 font-medium border-t border-gray-50" onClick={toggleMobileMenu}>Partners</Link>
              <Link to="/contact" className="block py-2 text-gray-700 font-medium border-t border-gray-50" onClick={toggleMobileMenu}>Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/images/logo/logo.png" alt="Website365" className="h-12 w-auto mb-4 brightness-0 invert" onError={(e) => e.target.style.display = 'none'} />
              <div className="text-white text-xl font-bold mb-4" style={{display: 'none'}}>Website365</div>
              <p className="text-sm text-slate-400 mb-4">
                Reliable web hosting, domain registration, and professional web design services for South African businesses.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </a>
                <a href="https://wa.me/27836000152" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.252c0-5.443 4.429-9.876 9.878-9.876 2.639 0 5.118 1.026 6.985 2.894s2.893 4.345 2.893 6.985c-.003 5.444-4.432 9.881-9.877 9.881m11.384-15.355C20.315 3.307 16.204 1.121 11.968 1.121 6.015 1.121 1.17 5.966 1.17 11.918c0 1.905.495 3.737 1.436 5.345l-1.527 5.582 5.715-1.498a11.85 11.85 0 005.174 1.192h.003c5.948 0 10.792-4.846 10.792-10.796 0-2.883-1.123-5.592-3.158-7.628"></path></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/hosting/cpanel" className="hover:text-white transition-colors">cPanel Hosting</Link></li>
                <li><Link to="/hosting/directadmin" className="hover:text-white transition-colors">DirectAdmin Hosting</Link></li>
                <li><Link to="/hosting/reseller" className="hover:text-white transition-colors">Reseller Hosting</Link></li>
                <li><Link to="/domains/registration" className="hover:text-white transition-colors">Domain Registration</Link></li>
                <li><Link to="/web-design" className="hover:text-white transition-colors">Web Design</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start"><MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> South Africa</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2 flex-shrink-0" /> support@website365.co.za</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2 flex-shrink-0" /> 086 199 5070</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Website365. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27836000152"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.252c0-5.443 4.429-9.876 9.878-9.876 2.639 0 5.118 1.026 6.985 2.894s2.893 4.345 2.893 6.985c-.003 5.444-4.432 9.881-9.877 9.881m11.384-15.355C20.315 3.307 16.204 1.121 11.968 1.121 6.015 1.121 1.17 5.966 1.17 11.918c0 1.905.495 3.737 1.436 5.345l-1.527 5.582 5.715-1.498a11.85 11.85 0 005.174 1.192h.003c5.948 0 10.792-4.846 10.792-10.796 0-2.883-1.123-5.592-3.158-7.628"></path>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-3 font-medium">Chat with us</span>
      </a>
    </div>
  );
};

export default Layout;
