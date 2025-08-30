'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ isDarkMode = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking on a link (let the link handle closing)
      if (event.target.closest('a')) {
        return;
      }
      
      // Don't close if clicking the hamburger button (let button handle toggle)
      if (event.target.closest('[data-hamburger-button]')) {
        return;
      }
      
      // Close if clicking outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to check if a link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Add this to your global CSS file or a style tag */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        body {
          background-color: white;
          margin: 0;
          padding: 0;
        }
        
        .nav-link-light {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 22px;
          color: #2D2D2D;
          text-align: center;
          font-feature-settings: 'liga' off, 'clig' off;
          text-decoration: none;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link-dark {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 22px;
          color: white;
          text-align: center;
          font-feature-settings: 'liga' off, 'clig' off;
          text-decoration: none;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link-light:hover,
        .nav-link-dark:hover {
          text-decoration: none;
        }
        
        .nav-link-light.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #0D4F7A;
        }
        
        .nav-link-dark.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: white;
        }
      `}</style>

      <div className="pt-2 md:mb-3 md:pt-4">
        <nav 
          className={`w-full flex items-center justify-between h-20 px-4 sm:px-6 md:px-8 lg:px-[100px] ${
            isDarkMode ? 'bg-transparent' : 'bg-transparent'
          }`}
        >
          {/* Logo - Responsive height (larger on desktop) */}
          <Link href="/" className="flex items-center">
            <Image
              src={isDarkMode ? "/darklogo.svg" : "/logo.svg"}
              alt="Arthro Solutions Orthopaedics"
              height={208}
              width={208}
              className="h-11 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center">
            {/* Home link */}
            <Link 
              href="/" 
              className={`${isDarkMode ? 'nav-link-dark' : 'nav-link-light'} mr-9 ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            
            {/* About link */}
            <Link 
              href="/about" 
              className={`${isDarkMode ? 'nav-link-dark' : 'nav-link-light'} mr-9 ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            
            {/* Services link */}
            <Link 
              href="/services/shoulder-care" 
              className={`${isDarkMode ? 'nav-link-dark' : 'nav-link-light'} mr-9 ${isActive('/services') ? 'active' : ''}`}
            >
              Services
            </Link>
            
            {/* FAQ link */}
            <Link 
              href="/faq" 
              className={`${isDarkMode ? 'nav-link-dark' : 'nav-link-light'} mr-9 ${isActive('/faq') ? 'active' : ''}`}
            >
              FAQ
            </Link>
            
            {/* Contact Us link */}
            <Link 
              href="/contact-us" 
              className={`${isDarkMode ? 'nav-link-dark' : 'nav-link-light'} mr-9 ${isActive('/contact-us') ? 'active' : ''}`}
            >
              Contact Us
            </Link>
            
            {/* Book A Visit Button */}
            <Link 
              href="/book-visit" 
              className={`ml-6 px-6 py-3 ${
                isDarkMode 
                  ? 'bg-white text-[#0D4F7A] hover:bg-gray-100' 
                  : 'bg-[#0D4F7A] text-white border border-[#0D4F7A] hover:text-[#0D4F7A] hover:bg-white'
              } rounded-md font-['Inter'] font-medium text-[18px] leading-[22px] transition-all duration-300`}
              style={{ borderRadius: '6px' }}
            >
              Book A Visit
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="lg:hidden">
            <button 
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              data-hamburger-button
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ease-out ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              } ${isDarkMode ? 'bg-white' : 'bg-[#0D4F7A]'}`}></span>
              <span className={`block w-6 h-0.5 mt-1.5 transition-opacity duration-300 ease-out ${
                isMenuOpen ? 'opacity-0' : ''
              } ${isDarkMode ? 'bg-white' : 'bg-[#0D4F7A]'}`}></span>
              <span className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ease-out ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              } ${isDarkMode ? 'bg-white' : 'bg-[#0D4F7A]'}`}></span>
            </button>
          </div>
        </nav>

        {/* Full Width Dropdown Menu (Mobile) - Moved outside nav */}
        {isMenuOpen && (
          <div className="lg:hidden fixed left-0 right-0 top-[88px] bg-white shadow-lg border-t border-gray-200 z-50" ref={menuRef}>
            <div className="py-2">
              {/* Home link */}
              <Link 
                href="/" 
                className={`block px-4 py-3 hover:bg-gray-50 font-['Inter'] font-medium text-[16px] leading-[20px] transition-all duration-300 ${
                  isActive('/') ? 'text-[#0D4F7A]' : 'text-[#2D2D2D]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* About link */}
              <Link 
                href="/about" 
                className={`block px-4 py-3 hover:bg-gray-50 font-['Inter'] font-medium text-[16px] leading-[20px] transition-all duration-300 ${
                  isActive('/about') ? 'text-[#0D4F7A]' : 'text-[#2D2D2D]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Services link */}
              <Link 
                href="/services/shoulder-care" 
                className={`block px-4 py-3 hover:bg-gray-50 font-['Inter'] font-medium text-[16px] leading-[20px] transition-all duration-300 ${
                  isActive('/services') ? 'text-[#0D4F7A]' : 'text-[#2D2D2D]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              
              {/* FAQ link */}
              <Link 
                href="/faq" 
                className={`block px-4 py-3 hover:bg-gray-50 font-['Inter'] font-medium text-[16px] leading-[20px] transition-all duration-300 ${
                  isActive('/faq') ? 'text-[#0D4F7A]' : 'text-[#2D2D2D]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              {/* Contact Us link */}
              <Link 
                href="/contact-us" 
                className={`block px-4 py-3 hover:bg-gray-50 font-['Inter'] font-medium text-[16px] leading-[20px] transition-all duration-300 ${
                  isActive('/contact-us') ? 'text-[#0D4F7A]' : 'text-[#2D2D2D]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              {/* Book A Visit Button in mobile menu */}
              <div className="px-4 py-3">
                <Link 
                  href="/book-visit" 
                  className="block w-full text-center px-6 py-3 bg-[#0D4F7A] text-white rounded-md font-['Inter'] font-medium text-[16px] leading-[20px] transition-all duration-300 hover:bg-opacity-90"
                  style={{ borderRadius: '6px' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book A Visit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}