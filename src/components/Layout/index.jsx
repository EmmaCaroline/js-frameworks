import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/logo.react.jpg";
import { IoCartOutline } from "react-icons/io5";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-stone-500 text-white p-4 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              className="aspect-square w-14 h-14 md:w-20 md:h-20"
              src={Logo}
              alt="Logo"
            />
          </Link>
          <h1>The Loopy Shop</h1>
        </div>

        <nav className="pr-4 md:pr-12">
          <ul>
            <li>
              <Link to="cart">
                <IoCartOutline className="text-white text-2xl hover:text-gray-400" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

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
