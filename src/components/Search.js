import { useEffect, useState } from "react";
import resCardsItems from "../utils/MockData/resCardsItems.json"
import ResCards,{TopRatedResCards} from "./ResCards";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  CustomizedArrow  from "../utils/Constant/CustomizedArrow";

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
  
  let settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow : <CustomizedArrow />,
    nextArrow : <CustomizedArrow />
   };


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
      <div className="m-auto w-[300px]">
        <h1 className="text-xl font-semibold">Popular restaurant's near you 😋</h1>
        </div>
          <div className="w-3/4 m-auto">
            <div className="mt-20">
            <Slider {...settings}>
          {filteredRestaurants.map((restro) => (
          <Link 
          className="flex justify-center items-center"
          key={restro.info.id}
           to={"/restaurants/" + restro.info.id}>
            {restro.info.avgRating>3 && restro.info.avgRating<4 ? (
              <TopRatedRestaurant resobj={restro}/>
            ) : (
              <ResCards resobj={restro} />
            )}
          </Link>
        ))}
        </Slider>
        </div>
      </div>            
    </div>
  );
};

export default Search;
