import { useEffect, useState } from "react";
import { RESMENU_API } from "../Constant/constants";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch("https://corsproxy.org/?"+RESMENU_API + resId);
    const json = await response.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useResMenu;
