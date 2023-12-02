import {createSlice} from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: 'wishlist', // not neccessary
    initialState: [],
    reducers:
    // reducer contains the actions
    { // addToWishlist act as action and its value should be a arrow fn
        addToWishlist: (state, action) => {
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        }

    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer
