import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center text-xl space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Главная
        </Link>
        <Link to="/todo" className="text-white hover:text-gray-300">
          TODO
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
