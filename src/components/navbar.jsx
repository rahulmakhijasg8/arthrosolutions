'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ isDarkMode = false }) {
  const pathname = usePathname();

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
              href="/services" 
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
                  : 'bg-[#0D4F7A] text-white hover:bg-opacity-90'
              } rounded-md font-['Inter'] font-medium text-[18px] leading-[22px] transition-all duration-300`}
              style={{ borderRadius: '6px' }}
            >
              Book A Visit
            </Link>
          </div>

          {/* Mobile Book A Visit Button */}
          <div className="lg:hidden">
            <Link 
              href="/book-visit" 
              className={`px-4 py-2 ${
                isDarkMode 
                  ? 'bg-white text-[#0D4F7A] hover:bg-gray-100' 
                  : 'bg-[#0D4F7A] text-white hover:bg-opacity-90'
              } rounded-md font-['Inter'] font-medium text-[16px] leading-[20px] transition-all duration-300`}
              style={{ borderRadius: '6px' }}
            >
              Book A Visit
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}