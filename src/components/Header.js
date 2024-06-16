import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import appLogo from "../images/appLogo.svg";

const Header = () => {
  const data = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between border border-gray-400  bg-gray-200 shadow-lg">
      <div className="logo-container w-32">
        <Link to="/">
          <img src={appLogo} className="m-[-15px] md:m-[-10px] w-[150px] md:w-[175px] top-[-20px] absolute" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5 text-lg">
          <li className="md:px-4">
            <Link to="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />

              <span className="md:px-2">Search</span>
            </Link>
          </li>

          <li className="md:px-4">
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} size="lg" />
              <span className="md:px-2">Home</span>
            </Link>
          </li>
          <li className="md:px-4">
            <Link to="/cart">
              {data.length > 0 ? (
                <FontAwesomeIcon icon={faCartArrowDown} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
              )}
              <span className="md:px-2">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
