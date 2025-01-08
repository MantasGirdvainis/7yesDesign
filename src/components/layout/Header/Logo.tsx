import React from "react";

/**
 * @component Logo
 * @description Displays the company logo as a combination of styled text.
 *
 * @usage
 * <Logo />
 */
const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center space-x-1 pr-4 py-2">
      {/* "7" styled in green */}
      <span className="text-green-600 ml-3 font-bold text-3xl">7</span>

      {/* "yes" styled with gray color */}
      <span className="text-gray-800 font-bold text-3xl">yes</span>
    </a>
  );
};

export default Logo;
