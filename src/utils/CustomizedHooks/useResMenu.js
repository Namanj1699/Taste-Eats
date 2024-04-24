import { useEffect, useState } from "react";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6939481&lng=77.2981474&restaurantId=";
    const enc_url = encodeURIComponent(url);
    
    //Creating my own proxy and deployed on cloud fare worker to resolve CORS Error...
    const updated_url= "https://tasteats.jainnaman1699.workers.dev/?apiUrl=" + enc_url + resId;
    
    const response = await fetch(updated_url);
    const json = await response.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useResMenu;
