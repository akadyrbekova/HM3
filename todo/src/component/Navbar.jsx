import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-around">
      <ul className="flex justify-center text-xl space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Главная
        </Link>
        <Link to="/todo" className="text-white hover:text-gray-300">
          TODO
        </Link>
      </ul>
      <IoMdNotificationsOutline className="flex justify-center text-3xl	 text-gray-300" />
    </nav>
  );
};

export default Navbar;
