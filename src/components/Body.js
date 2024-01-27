import ResCards from "./ResCards";
import resobj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  let onlineStatus = useOnlineStatus();

  if(onlineStatus == false)
  {
    return<h1>OOPS !! No Internet</h1>
  }
  
  return listofRestaurants.length === 0 ? (
     <Shimmer />
  ): (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className='px-4 py-2 m-4'
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
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2"
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
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restro) => (
          <Link key={restro.info.id}  to={"/restaurants/"+restro.info.id}><ResCards resobj={restro} /></Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
