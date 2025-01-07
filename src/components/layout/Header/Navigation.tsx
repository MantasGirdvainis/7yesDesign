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
    }, 200); // Delay for smooth UX
  };

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault(); // Prevent navigation
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
      {/* Desktop and Tablet Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        {/* Categories */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("categories")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="#"
            onClick={(e) => handleClick(e, "categories")}
            className={`flex items-center gap-1 text-sm ${
              activeLink === "categories" ? "text-[#82b3a2]" : "text-gray-700"
            } hover:text-[#82b3a2]`}
          >
            Categories <FiChevronDown />
          </a>
          {dropdownOpen === "categories" && (
            <div
              className="absolute top-full text-sm shadow left-0 mt-2 w-48 bg-white rounded-md p-4"
              onMouseEnter={() => handleMouseEnter("categories")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/categories/sub1" className="block text-gray-700 hover:text-[#82b3a2]">
                Subcategory 1
              </a>
              <a href="/categories/sub2" className="block text-gray-700 hover:text-[#82b3a2]">
                Subcategory 2
              </a>
            </div>
          )}
        </div>

        {/* Pages */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("pages")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="#"
            onClick={(e) => handleClick(e, "pages")}
            className={`flex items-center gap-1 text-sm ${
              activeLink === "pages" ? "text-[#82b3a2]" : "text-gray-700"
            } hover:text-[#82b3a2]`}
          >
            Pages <FiChevronDown />
          </a>
          {dropdownOpen === "pages" && (
            <div
              className="absolute top-full text-sm shadow left-0 mt-2 w-48 bg-white rounded-md p-4"
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/pages/page1" className="block text-gray-700 hover:text-[#82b3a2]">
                Page 1
              </a>
              <a href="/pages/page2" className="block text-gray-700 hover:text-[#82b3a2]">
                Page 2
              </a>
            </div>
          )}
        </div>

        {/* Account */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("account")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="#"
            onClick={(e) => handleClick(e, "account")}
            className={`flex items-center gap-1 text-sm ${
              activeLink === "account" ? "text-[#82b3a2]" : "text-gray-700"
            } hover:text-[#82b3a2]`}
          >
            Account <FiChevronDown />
          </a>
          {dropdownOpen === "account" && (
            <div
              className="absolute top-full text-sm shadow left-0 mt-2 w-48 bg-white rounded-md p-4"
              onMouseEnter={() => handleMouseEnter("account")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/account/profile" className="block text-gray-700 hover:text-[#82b3a2]">
                Profile
              </a>
              <a href="/account/settings" className="block text-gray-700 hover:text-[#82b3a2]">
                Settings
              </a>
            </div>
          )}
        </div>

        {/* Blog */}
        <a
          href="#"
          onClick={(e) => handleClick(e, "blog")}
          className={`${
            activeLink === "blog" ? "text-[#82b3a2]" : "text-gray-700"
          } hover:text-[#82b3a2] text-sm`}
        >
          Blog
        </a>

        {/* Reviews */}
        <a
          href="#"
          onClick={(e) => handleClick(e, "reviews")}
          className={`${
            activeLink === "reviews" ? "text-[#82b3a2]" : "text-gray-700"
          } hover:text-[#82b3a2] text-sm`}
        >
          Reviews
        </a>
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
          {/* Categories */}
          <a
            href="#"
            onClick={() => handleMobileDropdownToggle("categories")}
            className="block flex justify-between text-gray-700 hover:text-[#82b3a2] py-2"
          >
            Categories <FiChevronDown />
          </a>
          {mobileDropdown === "categories" && (
            <div className="ml-4">
              <a href="/categories/sub1" className="block text-gray-700 hover:text-[#82b3a2] py-1">
                Subcategory 1
              </a>
              <a href="/categories/sub2" className="block text-gray-700 hover:text-[#82b3a2] py-1">
                Subcategory 2
              </a>
            </div>
          )}

          {/* Pages */}
          <a
            href="#"
            onClick={() => handleMobileDropdownToggle("pages")}
            className="block flex justify-between text-gray-700 hover:text-[#82b3a2] py-2"
          >
            Pages <FiChevronDown />
          </a>
          {mobileDropdown === "pages" && (
            <div className="ml-4">
              <a href="/pages/page1" className="block text-gray-700 hover:text-[#82b3a2] py-1">
                Page 1
              </a>
              <a href="/pages/page2" className="block text-gray-700 hover:text-[#82b3a2] py-1">
                Page 2
              </a>
            </div>
          )}

          {/* Account */}
          <a
            href="#"
            onClick={() => handleMobileDropdownToggle("account")}
            className="block flex justify-between text-gray-700 hover:text-[#82b3a2] py-2"
          >
            Account <FiChevronDown />
          </a>
          {mobileDropdown === "account" && (
            <div className="ml-4">
              <a href="/account/profile" className="block text-gray-700 hover:text-[#82b3a2] py-1">
                Profile
              </a>
              <a href="/account/settings" className="block text-gray-700 hover:text-[#82b3a2] py-1">
                Settings
              </a>
            </div>
          )}

          <a href="/blog" className="block text-gray-700 hover:text-[#82b3a2] py-2">
            Blog
          </a>
          <a href="/reviews" className="block text-gray-700 hover:text-[#82b3a2] py-2">
            Reviews
          </a>
        </div>
      )}
    </div>
  );
};

export default Navigation;
