import React, { useState } from 'react';
import { FiSun, FiMoon, FiSearch, FiUser } from 'react-icons/fi';

const HeaderActions: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Optional: Implement theme switching logic here
    document.body.classList.toggle('dark', !isDarkMode); // Example for dark mode class
  };

  return (
    <div className="flex items-center gap-4 ml-4"> {/* Added 'ml-4' for spacing */}
      {/* Theme Toggle */}
      <div className="flex items-center gap-2">
        <button
          className="p-2 rounded-md hover:bg-gray-200"
          aria-label="Light theme"
          onClick={() => setIsDarkMode(false)}
        >
          <FiSun className={isDarkMode ? 'text-gray-400' : 'text-[#448c74]'} />
        </button>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <div
            className={`w-10 h-6 bg-gray-300 rounded-full p-1 transition ${
              isDarkMode ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transform transition ${
                isDarkMode ? 'translate-x-4' : 'translate-x-0'
              }`}
            ></div>
          </div>
        </label>

        <button
          className="p-2 rounded-md hover:bg-gray-200"
          aria-label="Dark theme"
          onClick={() => setIsDarkMode(true)}
        >
          <FiMoon className={isDarkMode ? 'text-blue-500' : 'text-gray-400'} />
        </button>
      </div>

      {/* Search Icon */}
      <button
        className="p-2 rounded-md hover:bg-gray-200"
        aria-label="Search"
      >
        <FiSearch />
      </button>

      {/* User Icon */}
      <button
        className="p-2 rounded-md hover:bg-gray-200"
        aria-label="Account"
      >
        <FiUser />
      </button>
    </div>
  );
};

export default HeaderActions;
