import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import appLogo from "../images/appLogo.png";

const Header = () => {
  const data = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-yellow-50 shadow-lg">
      <div className="logo-container w-40 m-2">
        <Link to="/">
          <img src={appLogo} className="rounded-full" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5 text-lg">
          <li className="px-4">
            <Link to="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />

              <span className="px-2">Search</span>
            </Link>
          </li>

          <li className="px-4">
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} size="xl" />
              <span className="px-2">Home</span>
            </Link>
          </li>
          <li className=" px-4">
            <Link to="/cart">
              {data.length > 0 ? (
                <FontAwesomeIcon icon={faCartArrowDown} size="xl" />
              ) : (
                <FontAwesomeIcon icon={faCartShopping} size="xl" />
              )}
              <span className="px-2">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
