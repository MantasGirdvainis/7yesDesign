import React, { useState, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

/**
 * @component Navigation
 * @description Provides navigation links for desktop and mobile views, including dropdown menus for specific links.
 *
 * @features
 * - Desktop and mobile navigation.
 * - Dropdown menus for "Categories", "Pages", and "Account".
 * - Simple links for "Blog" and "Reviews".
 *
 * @usage
 * <Navigation />
 */
const Navigation: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * @function handleMouseEnter
   * @description Opens the dropdown for the hovered link (desktop only).
   * @param {string} link - The link associated with the dropdown.
   */
  const handleMouseEnter = (link: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(link);
  };

  /**
   * @function handleMouseLeave
   * @description Closes the dropdown after a delay (desktop only).
   */
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
  };

  /**
   * @function handleClick
   * @description Activates the clicked link.
   * @param {React.MouseEvent} e - The click event.
   * @param {string} link - The link to activate.
   */
  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setActiveLink(link);
  };

  /**
   * @function toggleMobileMenu
   * @description Toggles the mobile navigation menu.
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        {/* Links with dropdowns */}
        {["categories", "pages", "account"].map((link) => (
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
              <FiChevronDown />
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

        {/* Simple links */}
        {["blog", "reviews"].map((link) => (
          <a
            key={link}
            href={`/${link}`}
            onClick={(e) => handleClick(e, link)}
            className={`text-sm ${
              activeLink === link ? "text-primaryLight" : "text-gray-700"
            } hover:text-primaryLight`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
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
          {/* Links with dropdowns */}
          {["categories", "pages", "account"].map((link) => (
            <div key={link}>
              <a
                href="#"
                onClick={() =>
                  setDropdownOpen(dropdownOpen === link ? null : link)
                }
                className="flex justify-between text-gray-700 hover:text-primaryLight py-2"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <FiChevronDown />
              </a>
              {dropdownOpen === link && (
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

          {/* Simple links */}
          {["blog", "reviews"].map((link) => (
            <a
              key={link}
              href={`/${link}`}
              className="block text-gray-700 hover:text-primaryLight py-2"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
