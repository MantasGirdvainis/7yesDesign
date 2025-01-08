import React from "react";

/**
 * @component Breadcrumbs
 * @description A navigation component that displays the current page hierarchy as a breadcrumb trail.
 *
 * @usage
 * <Breadcrumbs />
 */
const Breadcrumbs: React.FC = () => {
  // Define the breadcrumb structure
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Checkout", path: "/checkout" },
  ];

  // Define the active breadcrumb path
  const activePath = "/checkout";

  return (
    <nav className="text-xs text-gray-400 flex items-center space-x-2">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.path} className="flex items-center space-x-2">
          {/* Breadcrumb Link */}
          <a
            href={breadcrumb.path}
            className={`${
              breadcrumb.path === activePath
                ? "text-primaryLight"
                : "hover:underline text-gray-400"
            }`}
          >
            {breadcrumb.name}
          </a>

          {/* Separator */}
          {index < breadcrumbs.length - 1 && <span className="mx-1">&gt;</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
