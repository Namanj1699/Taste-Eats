import ResCards, { TopRatedResCards } from "./ResCards";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomizedHooks/useOnlineStatus";
import Footer from "../components/Footer";
import resCardsItems from "../utils/MockData/resCardsItems.json";
import noInternet from "../images/noInternet.png";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../images/Spinner.gif";

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState(resCardsItems);
  const [topRatedCheckMark, setTopRatedCheckMark] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const TopRatedRestaurant = TopRatedResCards(ResCards);

  let onlineStatus = useOnlineStatus();

  const filterRestaurant = () => {
    if (topRatedCheckMark == false) {
      const filteredList = listofRestaurants.filter(
        (res) => res.info.avgRating > 4.2
      );
      setListOfRestaurants(filteredList);
      setTopRatedCheckMark(true);
    } else if (topRatedCheckMark == true) {
      setListOfRestaurants(resCardsItems);
      setTopRatedCheckMark(false);
    }
  };

  const fetchMoreData = () => {
    if (listofRestaurants.length >= 1000) {
      setHasMore(false);
    }
    // a fake async api call like which sends more records in 1 sec
    setTimeout(() => {
      setListOfRestaurants(listofRestaurants.concat(resCardsItems));
    }, 1000);
  };

  return onlineStatus === false ? (
    <div>
      <label className="font-bold flex justify-center text-2xl mt-16">
        No Internet
      </label>
      <img src={noInternet} className="w-[10%] mx-auto my-10" />
    </div>
  ) : (
    <div className="body">
      <InfiniteScroll
        dataLength={listofRestaurants.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<img className="m-auto py-8" src={Spinner} />}
      >
        <div className="flex justify-between m-4">
          <h1 className="text-xl font-bold mx-2">
            Hey Foodie, What's on your mind?
          </h1>
          <div className="mx-14">
            <input
              type="checkbox"
              className="mx-2 cursor-pointer"
              onClick={filterRestaurant}
              defaultChecked={topRatedCheckMark}
            />
            <label className="mx-1 font-bold text-base">
              Top Rated Restaurants
            </label>
          </div>
        </div>
        <div className="flex flex-wrap">
          {listofRestaurants.map((restro) => (
            <Link key={restro.info.id} to={"/restaurants/" + restro.info.id}>
              {restro.info.avgRating > 3 && restro.info.avgRating < 4 ? (
                <TopRatedRestaurant resobj={restro} />
              ) : (
                <ResCards resobj={restro} />
              )}
            </Link>
          ))}
        </div>
      </InfiniteScroll>
      <Footer />
    </div>
  );
};

export default Body;
