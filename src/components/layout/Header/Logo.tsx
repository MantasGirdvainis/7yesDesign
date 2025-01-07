import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center space-x-1 pr-4 py-2">
      {/* "7" with green color */}
      <span className="text-green-600 ml-3 font-bold text-3xl">7</span>
      
      {/* "yes" with consistent styling */}
      <span className="text-gray-800 font-bold text-3xl">yes</span>
    </a>
  );
};

export default Logo;
