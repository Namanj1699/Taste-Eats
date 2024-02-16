import ResCards, { TopRatedResCards } from "./ResCards";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomizedHooks/useOnlineStatus";
import Footer from "../components/Footer";
import resCardsItems from "../utils/MockData/resCardsItems.json"
import noInternet from "../images/noInternet.png"

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState(resCardsItems);
  const [topRatedCheckMark, setTopRatedCheckMark]= useState(false);

  const TopRatedRestaurant = TopRatedResCards(ResCards);

  let onlineStatus = useOnlineStatus();

  const filterRestaurant = () =>{
    if(topRatedCheckMark==false)
    {    
    const filteredList = listofRestaurants.filter(
        (res) => res.info.avgRating > 4.2);
      setListOfRestaurants(filteredList);
      setTopRatedCheckMark(true);
    }
    else if(topRatedCheckMark==true)
    {
        setListOfRestaurants(resCardsItems);
        setTopRatedCheckMark(false);
    }

  }

  return  onlineStatus === false ?
  (
  <div>
      <label className="font-bold flex justify-center text-2xl mt-16">No Internet</label>
      <img src={noInternet} className="w-[10%] mx-auto my-10"/>
  </div>)
   :( <div className="body">
      <div className="flex justify-between m-4">
        <h1 className="text-xl font-bold mx-2">Hey Foodie, What's on your mind?</h1>
        <div className="mx-14">
          <input
            type="checkbox" className="mx-2" onClick={filterRestaurant} defaultChecked={topRatedCheckMark}
          />
          <label className="mx-1 font-bold text-base">Top Rated Restaurants</label>
          </div>
        </div>
      <div className="flex flex-wrap">
        {listofRestaurants.map((restro) => (
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
      <Footer/>
    </div>
  );
};

export default Body;
