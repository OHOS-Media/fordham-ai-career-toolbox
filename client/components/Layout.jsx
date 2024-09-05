import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
