
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Nos Soins', path: '/nos-soins' },
  { label: 'Mau Pilates', path: '/mau-pilates' },
  { label: 'Tarifs', path: '/tarifs' },
  { label: 'Contact', path: '/contact' },
];

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    if (item.path.startsWith('/#')) {
      e.preventDefault();
      const id = item.path.substring(2);
      
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(item.path);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`glass-panel rounded-full px-6 py-4 flex items-center justify-between transition-all duration-500 ${
              isScrolled ? 'shadow-lg shadow-stone-200/50' : 'shadow-none bg-transparent border-transparent backdrop-blur-none'
            } ${!isScrolled && 'bg-white/50 backdrop-blur-md border-white/40'}`}
          >
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="bg-sage-600 text-white p-2 rounded-full transition-transform duration-500 group-hover:rotate-180">
                <Leaf size={20} />
              </div>
              <span className="font-serif text-lg md:text-xl font-semibold text-sage-900 tracking-tight">
                Kine<span className="font-light">Rolampont</span>
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-300 hover:text-sage-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-sage-600 after:transition-all after:duration-300 ${
                      isActive && !item.path.includes('#') ? 'text-sage-800 after:w-full' : 'text-stone-600 after:w-0 hover:after:w-full'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={onBookClick}
                className="hidden md:block px-6 py-2.5 bg-sage-900 text-white rounded-full text-sm font-medium hover:bg-sage-800 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-sage-900/20"
              >
                Prendre RDV
              </button>
              
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-stone-600 hover:text-sage-800 transition-colors"
              >
                {isMobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-stone-50 pt-32 px-6"
          >
             <div className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setIsMobileOpen(false);
                  }}
                  className="text-2xl font-serif text-stone-800 hover:text-sage-600 transition-colors"
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={onBookClick}
                className="mt-8 px-8 py-3 bg-sage-900 text-white rounded-full text-lg font-medium shadow-xl"
              >
                Prendre RDV sur Maiia
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
