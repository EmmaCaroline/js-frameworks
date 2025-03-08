import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="bg-green-500">My Website</h1>
      </header>

      <nav className="bg-gray-200 p-4">
        <ul className="flex gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="product">Product</Link></li>
        </ul>
      </nav>

      <main className="flex-grow p-4">
        <Outlet /> {/* This is where page content will be injected */}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 My Website
      </footer>
    </div>
  );
};

export default Layout;