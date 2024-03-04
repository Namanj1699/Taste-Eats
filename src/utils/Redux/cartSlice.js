import { createSlice } from "@reduxjs/toolkit";

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
            const removeIndex = state.items.findIndex( item => item.card.info.id === action.payload);
            state.items.splice( removeIndex, 1 );
        },
        
        clearCart : ()=>{
            return {items:[]}
        },
    }
     
})

export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;