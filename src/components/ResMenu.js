import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import useResMenu from "../utils/CustomizedHooks/useResMenu";
import ResMenuCategory from "./ResMenuCategory";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const ResMenu = () => {
  const { id } = useParams();

  const resInfo = useResMenu(id);

  const [showIndex, setShowIndex] = useState(0);

  const itms = useSelector((store)=>  store.cart.items);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
  return (
    <div className="text-center">
      <h1 className="font-bold m-4 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordian */}
        {
        categories.map((category,index) => (
        <ResMenuCategory 
        key={category?.card?.card.title}
        data={category?.card?.card}
        showItems={index === showIndex && true}
        setShowIndex={()=> setShowIndex(index)}
        />
        ))}
      {itms.length>0 ? <div className="bg-green-600 text-white mx-60 my-2 py-2 flex justify-between sticky bottom-1">
          <span className="mx-2">{itms.length} item added</span>
          <div className="mx-2">
            <Link to="/cart">
            <span className="mx-1">View Cart</span>
            <FontAwesomeIcon icon={faCartArrowDown} />
            </Link>
            </div>
      </div> : <></>}
    </div>
  );
};

export default ResMenu;
