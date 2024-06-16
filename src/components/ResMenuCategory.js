import { useState } from "react";
import ResMenuItems from "./ResMenuItems";

const ResMenuCategory = ({data}) => {

  const [flag,setFlag] = useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <div>
      <div className="w-8/12 bg-gray-50 mx-auto my-4 shadow-lg p-4">
        <div className="flex justify-between " onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">⬇️</span>
        </div>
       {flag && <ResMenuItems items={data.itemCards} />} 
      </div>
    </div>
  );
};

export default ResMenuCategory;
