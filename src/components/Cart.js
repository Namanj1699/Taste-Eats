import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../utils/Redux/cartSlice";
import { CDN_URL } from "../utils/Constant/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Cart = () =>{ 
    
  console.log("inside cart component");
    
    const items = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    
    const removeItem = (item) =>{
        dispatch(removeItems(item));
    }

    return(
        <div className="text-center font-normal">
            <h1 className="font-bold">Cart</h1>
            {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-auto p-2 border-b-2 border-gray-300 text-left flex justify-between w-6/12 "
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
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute mx-48 my-12">
            <FontAwesomeIcon icon={faXmark} size="xl" className= "cursor-pointer" onClick={()=>removeItem(item)}/>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
        </div>
    );
}

export default Cart;