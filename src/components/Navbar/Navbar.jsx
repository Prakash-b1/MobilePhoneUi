import { useState } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ContactInfo from './ContactInfo';
import NavLinks from './NavLinks';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Top Section: Logo, Search, Contact Info */}
      <div className="flex justify-between items-center p-4 px-12">
        <Logo />

        {/* Mobile Hamburger Menu */}
        <button className="md:hidden flex items-center">
          <SearchBar />
          <span  onClick={toggleMobileMenu}>
          <FiMenu className="w-6 h-6" />

          </span>
        </button>

  
        {/* Show Search and Contact Info on larger screens */}
        <div className="hidden md:flex w-full justify-between items-center">
          <SearchBar />
          <ContactInfo />
        </div>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex p-2 justify-center pb-6">
        <NavLinks />
      </div>

      {/* Sidebar Menu for Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-[#1c1b1b] shadow-lg z-50 p-6">
            {/* Close button inside sidebar */}
            <button
              className="absolute top-4 right-4"
              onClick={toggleMobileMenu}
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Sidebar content */}
            <div className="space-y-6">
              <NavLinks />
              <ContactInfo />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
