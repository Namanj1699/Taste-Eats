import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../utils/Redux/cartSlice";
import { CDN_URL } from "../utils/Constant/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import emptyCart from "../images/emptyCart.png";
import { faGooglePay, faAmazonPay, faPaypal } from "@fortawesome/free-brands-svg-icons";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeItems(item));
  };

  let iTemTotal=0;
  
  items.filter((item,index)=>{
    key={index};
    item.card.info.price ? iTemTotal=(iTemTotal+item.card.info.price / 100) : iTemTotal=(iTemTotal+item.card.info.defaultPrice / 100)
  })

  let taxTotal = iTemTotal*5/100;
  let grandTotal = iTemTotal+taxTotal;

  return items.length === 0 ? (
    <div>
          <img src={emptyCart} className="w-2/4 m-auto" />
          <h1 className="text-center font-semibold">Your cart is empty</h1>
          <h3 className="text-center text-gray-400">You can go to home page to view more restaurants</h3>
           <button></button>
    </div>
  ) : (
    <div>
    <div className="text-center font-normal">
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
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="cursor-pointer"
                onClick={() => removeItem(item)}
              />
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
        
      ))}
    </div>
      <h1 className="font-semibold text-lg text-center">Bill Details</h1>
      <div className="mx-[360px] my-4">
      <p className="border-b-2 border-gray-200 text-gray-500">Item Total : {" "+iTemTotal}</p>
      <p className="my-2 text-gray-500">GST & Restaurant Charges : {" "+taxTotal.toFixed(2)}</p>
      <h1 className="border-t-2 border-black mt-8">To Pay : {" "+grandTotal.toFixed(2)}</h1>
      <div className="flex">
      <h1 className="mt-8 font-bold">Pay Via - </h1>
      <ul className="flex cursor-pointer">
        <li className="m-7"> <FontAwesomeIcon icon={faCreditCard} size="2xl"/></li>
        <li className="m-7"> <FontAwesomeIcon icon={faAmazonPay} size="2xl"/></li>
        <li className="m-7"> <FontAwesomeIcon icon={faPaypal} size="2xl"/></li>
        <li className="m-7"> <FontAwesomeIcon icon={faGooglePay} size="2xl"/></li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Cart;
