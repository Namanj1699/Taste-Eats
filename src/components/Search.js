import { useEffect, useState } from "react";
import resCardsItems from "../utils/MockData/resCardsItems.json"
import ResCards,{TopRatedResCards} from "./ResCards";
import { Link } from "react-router-dom";

const Search = () => {

  const [listofRestaurants, setListOfRestaurants] = useState(resCardsItems);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");

  const TopRatedRestaurant = TopRatedResCards(ResCards);

  useEffect(()=>{
    const filteredList = listofRestaurants.filter(
      (res) => res.info.avgRating > 4.3);
      setFilteredRestaurants(filteredList);
  },[])

  return (
    <div className="search">
      <input className="border-[1px] border-solid border-black 
      flex p-4 w-9/12 mx-36 my-12 rounded-md cursor-text" 
      type="text"
      value={searchText}
      placeholder="Search for restaurants"
      onChange={(e) => {
        setSearchText(e.target.value);
        const Flist = listofRestaurants.filter((rest) => {
          return rest.info.name
            .toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredRestaurants(Flist);
      }}
      />
      <div className="m-auto w-[300px]"><h1 className="text-lg font-bold">Popular restaurant's near you 😋</h1></div>
          <div className="flex">
          {filteredRestaurants.map((restro) => (
          <Link 
          key={restro.info.id}
           to={"/restaurants/" + restro.info.id}>
            {restro.info.avgRating>3 && restro.info.avgRating<4 ? (
              <TopRatedRestaurant resobj={restro}/>
            ) : (
              <ResCards resobj={restro} />
            )}
          </Link>
        ))}
      </div>            
    </div>
  );
};

export default Search;
