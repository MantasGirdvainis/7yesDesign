import React from "react";

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Checkout", path: "/checkout" },
  ];

  const activePath = "/checkout";

  return (
    <nav className="text-xs text-gray-400 flex items-center space-x-2">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.path} className="flex items-center space-x-2">
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
          {index < breadcrumbs.length - 1 && <span className="mx-1">&gt;</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
