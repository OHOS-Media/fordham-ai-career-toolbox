import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Layout = ({ children, footerData }) => {
  return (
    <div className="min-h-screen flex flex-col items-center relative bg-fordham-black">
      <Nav />
      <main className="flex-grow w-full">{children}</main>
      <Footer data={footerData} />
    </div>
  );
};

export default Layout;
