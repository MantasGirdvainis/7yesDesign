import React from "react";
import Logo from "./Logo";
import Breadcrumbs from "./Breadcrumbs";
import Navigation from "./Navigation";
import HeaderActions from "./HeaderActions";

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      {/* Main Header Section */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Mobile: Navigation and Logo grouped */}
        <div className="flex items-center gap-4 md:hidden">
          <Navigation />
          <Logo />
        </div>

        {/* Desktop/Tablet: Logo on the left */}
        <div className="hidden md:block md:flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop/Tablet: Navigation centered */}
        <div className="hidden md:flex flex-grow justify-center">
          <Navigation />
        </div>

        {/* Header Actions always on the right */}
        <div className="flex justify-end md:w-auto">
          <HeaderActions />
        </div>
      </div>

      {/* Breadcrumbs Section */}
      <div className="py-2">
        <div className="container mx-auto px-6">
          <Breadcrumbs />
        </div>
      </div>
    </header>
  );
};

export default Header;
