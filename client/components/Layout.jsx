import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">{children}</main>

      {/* Add a Footer component here if needed */}
    </div>
  );
};

export default Layout;
