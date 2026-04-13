import { Link } from "react-scroll";
import logo from "../assets/grace1.png";
const Logo = () => {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      className="flex items-center gap-2 text-2xl font-semibold text-gray-700 tracking-wide cursor-pointer hover:scale-105 duration-500"
    >
      <img src={logo} alt="" className="w-8 h-8" />{" "}
      <p>
        Grace Wilson
        <span className="text-indigo-500 animate-pulse">.</span>
      </p>
    </Link>
  );
};

export default Logo;
