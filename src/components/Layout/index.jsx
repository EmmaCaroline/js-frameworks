import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/logo.react.jpg";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="justify-between">
        <header className="bg-stone-500 text-white p-4">
          <img className="aspect-square w-20 h-20" src={Logo} alt="Logo" />
          <h1>The Loopy Shop</h1>

          <nav className="bg-stone-400 p-4">
            <ul className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="product">Product</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <main className="flex-grow p-4">
        <Outlet /> {/* This is where page content will be injected */}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <ul>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        &copy; 2025 The Loopy Shop
      </footer>
    </div>
  );
};

export default Layout;
