import { CDN_URL } from "../utils/Constant/constants";

const ResCards = (resobj1) => {
  const { resobj } = resobj1;
  const { name, cuisines, avgRating, costForTwo } = resobj.info;
  // const [dispName,setDispName] = useState(null);
  // const maxCharLimit = 10;
  return (
    <div className=" m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resobj.info.cloudinaryImageId}
        style={{ width: "100%", height: "200px" }}
      />
      {name.length > 15 ? (
        <h3 className="font-bold py-4 text-lg">
          {name.substring(0, 20) + "..."}
        </h3>
      ) : (
        <h3 className="font-bold py-4 text-lg">{name}</h3>
      )}
      {cuisines.length>1 ?<h4>{cuisines[0]+","+cuisines[1]}</h4> :
      <h4>{cuisines[0]}</h4>}
      <h4>{avgRating}*</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const TopRatedResCards = (ResCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-900 text-white m-1 p-1 rounded-lg">
          New in Town 🤤
        </label>
        <ResCards {...props} />
      </div>
    );
  };
};

export default ResCards;
