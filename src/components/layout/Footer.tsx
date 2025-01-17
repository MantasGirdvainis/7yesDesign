import React from "react";

/**
 * @component Footer
 * @description Displays the footer section with company branding and copyright information.
 *
 * @usage
 * <Footer />
 */
const Footer: React.FC = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-4 md:px-4">
        <p className="text-xs text-gray-500 pl-2 md:text-left">
          © 2025 All rights reserved. Made by{" "}
          <span className="text-primary">7 Yes</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
