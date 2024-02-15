import { useEffect, useState } from "react";

const useOnlineStatus=()=>{

    const[activeStatus , setActiveStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline", () => {setActiveStatus(false)});
        window.addEventListener("online", () => {setActiveStatus(true)});
    },[])
    
    return activeStatus;
} 

export default useOnlineStatus;