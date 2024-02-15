import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice"

const appStore = configureStore({
    reducer : {
        cart : cartReducer
    }
})

export default appStore;