import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, Phone, Search, User,
} from 'lucide-react';
import {
  FaFacebookF, FaTwitter, FaYoutube, FaTiktok,
} from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsClock } from 'react-icons/bs';
import { Button } from '../ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-4 text-sm dark:bg-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          {/* Left Info */}
          <div className="flex items-center space-x-6 text-base font-semibold">
            <div className="flex items-center space-x-1">
              <MdLocationOn className="text-white text-lg" />
              <span>Lag Hare, Addis Ababa</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdEmail className="text-white text-3xl hover:text-red-500 transition-all drop-shadow-sm" />
              <a href="mailto:info@radian-tech.com" className="hover:underline">
                info@radian-tech.com
              </a>
            </div>
          </div>

          {/* Right Info */}
          <div className="flex items-center space-x-4 text-base font-semibold">
            <div className="flex items-center space-x-1">
              <BsClock className="text-red-500 text-lg animate-pulse drop-shadow-sm" />
              <span>Mon–Sat: 9:00am – 7:00pm</span>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-3 ml-4">
              {[
                { href: 'https://facebook.com', icon: <FaFacebookF /> },
                { href: 'https://twitter.com', icon: <FaTwitter /> },
                { href: 'https://youtube.com', icon: <FaYoutube /> },
                { href: 'https://tiktok.com', icon: <FaTiktok /> },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white bg-white/10 p-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 hover:text-red-500 hover:shadow-lg hover:bg-white"
                >
                  <span className="text-lg">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg shadow-primary/5' : 'shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="./images/logo.png"
                alt="Trust as a service"
                className="w-14 h-14 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-foreground">Radian Tech</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-primary font-medium">
                Home
              </Link>

              <Link to="/services" className="hover:text-primary font-medium">
                Services
              </Link>

              <Link to="/products" className="hover:text-primary font-medium">
                Products
              </Link>

              <Link to="/AboutUs" className="hover:text-primary font-medium">
                About Us
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 hover:bg-muted rounded-lg hover:scale-110 transition-all">
                <User className="h-5 w-5 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg hover:scale-110 transition-all">
                <Search className="h-5 w-5 text-muted-foreground" />
              </button>

             <a href="ContactUs">
  <Button
    className="relative inline-flex items-center justify-center overflow-hidden text-white font-semibold px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-400"
  >
    <span className="z-10">Get A started</span>
    <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
  </Button>
</a>



              <a
                href="tel:+251911918269"
                className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ring-ping"></span>
                  <div className="relative bg-blue-500 p-2 rounded-full">
                    <Phone className="h-5 w-5" style={{ color: '#FA0116FF' }} />
                  </div>
                </div>

                <div className="text-sm leading-tight">
                  <div className="font-medium">Call Anytime</div>
                  <div className="relative group font-mono cursor-pointer leading-tight font-semibold">
                    <span className="hover:text-red-500 transition-colors duration-300">
                      09-27-44-61-71
                    </span>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </div>
                </div>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border py-4 space-y-4">
              <Link to="/" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>

              <Link to="/services" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>

              <Link to="/products" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>

              <Link to="/AboutUs" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>

              <a href="tel:+251911918269" className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>09-27-44-61-71</span>
              </a>
              <a href="mailto:info@rofoel.com" className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MdEmail className="h-4 w-4" />
                <span>info@rofoel.com</span>
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
