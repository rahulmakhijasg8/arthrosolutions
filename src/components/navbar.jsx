'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);
  const pathname = usePathname();
  
  // Add delay for dropdown closing
  const closeTimeout = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      
      // Clear any pending timeouts on unmount
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);
  
  // Function to handle mouse enter for services dropdown
  const handleServicesMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setServicesOpen(true);
  };
  
  // Function to handle mouse leave for services dropdown
  const handleServicesMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  // Service links
  const serviceLinks = [
    { href: '/shoulder-care', label: 'Shoulder Care' },
    { href: '/knee-revolution', label: 'Knee Revolution' },
    { href: '/hip-renewal', label: 'Hip Renewal' },
  ];

  // Function to check if a link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    // Check if any services page is active
    if (href === '/services') {
      return serviceLinks.some(service => pathname.startsWith(service.href));
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
        
        .nav-link {
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
        
        .nav-link:hover {
          text-decoration: none;
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #0D4F7A;
        }
        
        .dropdown-arrow {
          transition: transform 0.3s ease;
        }
        
        .dropdown-arrow.open {
          transform: rotate(180deg);
        }
        
        /* Add dropdown hover area */
        .services-dropdown-area {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          padding-top: 20px;
          z-index: 50;
        }
        
        .services-dropdown-content {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: visible;
        }
      `}</style>

      <div className="pt-2 md:mb-3 md:pt-4">
        <nav 
          className={`
            w-full 
            flex 
            items-center 
            justify-between 
            h-20
            px-4 sm:px-6 md:px-8 lg:px-[100px]
            bg-transparent
            transition-all
            duration-300
            ${scrolled ? 'shadow-md sticky top-0 z-50 bg-white' : ''}
          `}
        >
          {/* Logo - Responsive height (larger on desktop) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
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
              className={`nav-link mr-9 ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            
            {/* About link */}
            <Link 
              href="/about" 
              className={`nav-link mr-9 ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            
            {/* Services Dropdown - Desktop */}
            <div 
              className="relative mr-9"
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button 
                className={`
                  nav-link
                  flex items-center
                  cursor-pointer
                  bg-transparent
                  border-none
                  outline-none
                  ${isActive('/services') ? 'active' : ''}
                `}
              >
                Services
              </button>
              
              {/* Services Dropdown Content */}
              {servicesOpen && (
                <div 
                  className="services-dropdown-area"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div className="services-dropdown-content w-56">
                    <div className="py-2">
                      {serviceLinks.map((service) => (
                        <Link 
                          key={service.href}
                          href={service.href} 
                          className={`
                            block px-4 py-3 text-sm hover:bg-gray-50 
                            font-['Inter'] font-medium text-[#2D2D2D] no-underline
                            ${pathname.startsWith(service.href) 
                              ? 'bg-gray-50' 
                              : ''
                            }
                          `}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* FAQ link */}
            <Link 
              href="/faq" 
              className={`nav-link mr-9 ${isActive('/faq') ? 'active' : ''}`}
            >
              FAQ
            </Link>
            
            {/* Contact Us link */}
            <Link 
              href="/contact-us" 
              className={`nav-link mr-9 ${isActive('/contact-us') ? 'active' : ''}`}
            >
              Contact Us
            </Link>
            
            {/* Book A Visit Button */}
            <Link 
              href="/book-visit" 
              className="ml-6 px-6 py-3 bg-[#0D4F7A] text-white rounded-md font-['Inter'] font-medium text-[18px] leading-[22px] transition-all duration-300 hover:bg-opacity-90"
              style={{ borderRadius: '6px' }}
            >
              Book A Visit
            </Link>
          </div>

          {/* Mobile Book A Visit Button */}
          <div className="lg:hidden">
            <Link 
              href="/book-visit" 
              className="px-4 py-2 bg-[#0D4F7A] text-white rounded-md font-['Inter'] font-medium text-[16px] leading-[20px] transition-all duration-300 hover:bg-opacity-90"
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