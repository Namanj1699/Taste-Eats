import { useState } from "react";
import ResMenuItems from "./ResMenuItems";

const ResMenuCategory=({data,showItems,setShowIndex})=> {
  // const [showItems, setShowItems]=useState(false);

  const handleClick=()=>{
    // setShowItems(!showItems);
    setShowIndex();
  }
  console.log(1)
  return (
    <div>
        <div className="w-8/12 bg-gray-50 mx-auto my-4 shadow-lg p-4">
            <div className="flex justify-between " onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}{" "}({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {showItems && <ResMenuItems items={data.itemCards}/>}

        </div>
    </div>
  )
}

export default ResMenuCategory;
