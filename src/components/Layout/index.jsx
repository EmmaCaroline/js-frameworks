import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/logo.react.jpg";
import CartIcon from "../ui/CartIcon";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-stone-400 text-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <nav className="flex w-full justify-between items-center">
          <div className="flex flex-col items-center ">
            <Link to="/">
              <img
                className="aspect-square w-14 h-14 md:w-20 md:h-20"
                src={Logo}
                alt="Logo"
              />
            </Link>
            <h1 className="text-md md:text-lg">The Loopy Shop</h1>
          </div>
          <div className="pr-4 md:pr-12">
            <CartIcon />
          </div>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <Outlet /> {/* This is where page content will be injected */}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <ul>
          <li>
            <Link to="contact">Contact </Link>
          </li>
        </ul>
        <div className="text-sm mt-6">&copy; 2025 The Loopy Shop</div>
      </footer>
    </div>
  );
};

export default Layout;
