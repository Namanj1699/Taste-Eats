import { CDN_URL } from "../utils/constants";

const ResCards = (resobj1) =>{
    // console.log(props)
    const {resobj} = resobj1;
    const {name , cuisines , avgRating , costForTwo} = resobj.info;
    return(
      <div className="res-cards m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
        <img className="res-logo"
         alt="res-logo"
        src={CDN_URL+resobj.info.cloudinaryImageId}
        style={{width :"100%",height:"200px"}}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}*</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  }

  export default ResCards;