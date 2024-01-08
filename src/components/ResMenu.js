import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESMENU_API } from "../utils/constants";

const ResMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    console.log("useState called inside resmenu component");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      RESMENU_API+id
    );

    const json = await response.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.name}>
            {item.card.info.name}-Rs.
            {item.card.info.price / 100 || item.card.info.defaultprice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
