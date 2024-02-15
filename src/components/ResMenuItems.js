import { CDN_URL } from "../utils/Constant/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/Redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


const ResMenuItems = ({ items }) => {
  const dispatch = useDispatch();
  
  const addItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            <FontAwesomeIcon icon={faCartPlus} size="xl" className="mx-40 my-2 cursor-pointer" onClick={()=> addItem(item)}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResMenuItems;
