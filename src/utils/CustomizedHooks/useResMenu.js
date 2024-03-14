import { useEffect, useState } from "react";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const url = 'https://thingproxy.freeboard.io/fetch/' + encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6939481&lng=77.2981474&restaurantId=") + resId;
    const response = await fetch(url);
    const json = await response.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useResMenu;
