import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";

/**
 * @component Layout
 * @description Provides the main layout structure for the application, including the header, footer, and dynamic content in between.
 * 
 * @props
 * - `children` (React.ReactNode): The content to be displayed between the header and footer.
 * 
 * @usage
 * <Layout>
 *   <YourPageContent />
 * </Layout>
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />
      
      {/* Main Content Section */}
      <main className="flex-grow">{children}</main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;
