import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Custom Design', path: '/custom-design' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-obsidian/90 backdrop-blur-md border-b-2 border-gold/20 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start z-50">
            <span className="text-3xl font-display font-medium text-gradient-gold tracking-wider">
              QuattreC
            </span>
            <span className="text-[10px] tracking-[0.3em] text-cream/70 uppercase font-body mt-1">
              Jeweler's Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-widest font-body relative group transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-cream hover:text-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/custom-design"
              className="px-6 py-2 border border-gold/50 text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-obsidian transition-all duration-300 font-body relative overflow-hidden group block"
            >
              <span className="relative z-10">Begin Your Design</span>
              <div className="absolute inset-0 h-full w-full bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-gold p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.2 }}
              >
                <NavLink
                  to={link.path}
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `text-2xl uppercase tracking-[0.2em] font-display ${
                      isActive ? 'text-gold' : 'text-cream'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                to="/custom-design"
                onClick={toggleMobileMenu}
                className="mt-8 px-8 py-3 bg-gold text-obsidian text-sm uppercase tracking-widest block font-medium"
              >
                Begin Your Design
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
