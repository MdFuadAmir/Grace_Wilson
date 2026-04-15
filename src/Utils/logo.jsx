import { FaBullhorn } from "react-icons/fa";
import { Link } from "react-scroll";
const Logo = () => {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      className="flex items-center gap-2 text-2xl font-semibold text-gray-700 tracking-wide cursor-pointer hover:scale-105 duration-500"
    >
      <FaBullhorn className="text-teal-500"/>
      <p className="bg-linear-to-r from-teal-500 via-green-500 to-orange-500 bg-clip-text text-transparent font-semibold">
        Grace Wilson
      </p>
    </Link>
  );
};

export default Logo;
