import React, { useState, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navigation: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (link: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(link);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
  };

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setActiveLink(link);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileDropdownToggle = (link: string) => {
    setMobileDropdown(mobileDropdown === link ? null : link);
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        {["categories", "pages", "account", "blog", "reviews"].map((link) => (
          <div
            key={link}
            className="relative"
            onMouseEnter={() => handleMouseEnter(link)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              onClick={(e) => handleClick(e, link)}
              className={`flex items-center gap-1 text-sm ${
                activeLink === link ? "text-primaryLight" : "text-gray-700"
              } hover:text-primaryLight`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              {["categories", "pages", "account"].includes(link) && (
                <FiChevronDown />
              )}
            </a>
            {dropdownOpen === link && (
              <div className="absolute top-full text-sm shadow left-0 mt-2 w-48 bg-white rounded-md p-4">
                <a
                  href={`/${link}/sub1`}
                  className="block text-gray-700 hover:text-primaryLight"
                >
                  Subcategory 1
                </a>
                <a
                  href={`/${link}/sub2`}
                  className="block text-gray-700 hover:text-primaryLight"
                >
                  Subcategory 2
                </a>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          className="text-gray-700"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white p-4 text-sm">
          {["categories", "pages", "account"].map((link) => (
            <div key={link}>
              <a
                href="#"
                onClick={() => handleMobileDropdownToggle(link)}
                className="block flex justify-between text-gray-700 hover:text-primaryLight py-2"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <FiChevronDown />
              </a>
              {mobileDropdown === link && (
                <div className="ml-4">
                  <a
                    href={`/${link}/sub1`}
                    className="block text-gray-700 hover:text-primaryLight py-1"
                  >
                    Subcategory 1
                  </a>
                  <a
                    href={`/${link}/sub2`}
                    className="block text-gray-700 hover:text-primaryLight py-1"
                  >
                    Subcategory 2
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
