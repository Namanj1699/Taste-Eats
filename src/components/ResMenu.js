import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/CustomizedHooks/useResMenu";
import ResMenuCategory from "./ResMenuCategory";
import { useState } from "react";
const ResMenu = () => {
  const { id } = useParams();

  const resInfo = useResMenu(id);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
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
    </div>
  );
};

export default ResMenu;
