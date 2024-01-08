import ResCards from "./ResCards";
import resobj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Local State Variable - super powerful variable

  // Normal JS Variable
  // let listofRestaurants = []

  // React State Variable
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(
    () => {
    console.log("useState called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6939481&lng=77.2981474&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await response.json();

    // console.log(res)
    setListOfRestaurants(
      res.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      res.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="searchbox"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const Flist = listofRestaurants.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(Flist);
              console.log(Flist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restro) => (
          <Link key={restro.info.id}  to={"/restaurants/"+restro.info.id}><ResCards resobj={restro} /></Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
