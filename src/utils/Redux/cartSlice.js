import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        
        addItems : (state,action) =>{
            state.items.push(action.payload);
        },

        removeItems : (state,action)=>{
            console.log(current(state))
            debugger;

            const removeIndex = state.items.findIndex( item => item.card.info.id === action.payload);
            // remove object
            state.items.splice( removeIndex, 1 );

            // state.items.filter((itr)=> 
            // itr.card.info.id!=action)
        },
        
        clearCart : (state,action)=>{
            return {items:[]}
        },
    }
     
})

export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;