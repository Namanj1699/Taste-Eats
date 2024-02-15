import { useEffect, useState } from "react";
import { RESMENU_API } from "../Constant/constants";

const useResMenu = (resId) =>{
    console.log("Inside useResMenu Custom Hook");

    const[resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const response = await fetch(RESMENU_API+resId);
        const json = await response.json();
        setResInfo(json.data);
}
console.log(resInfo)
return resInfo;
}

export default useResMenu;

