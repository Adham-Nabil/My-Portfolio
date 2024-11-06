import logo from "../assets/ANlogo3.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-7 flex items-center justify-between py-1">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/adham-nabil-4047a92a4/" target="_blank">
          <FaLinkedin className="hover:text-cyan-300 duration-500" />
        </a>
        <a href="https://github.com/Adham-Nabil" target="_blank">
          <FaGithub className="hover:text-cyan-300 duration-500" />
        </a>
        <a href="https://wa.me/201203868497" target="_blank">
          <FaWhatsapp className="hover:text-cyan-300 duration-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
