import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
