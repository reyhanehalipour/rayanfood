import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./Shopping-cart/cartSlice";
import cartUiSlice from "./Shopping-cart/cartUiSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        cartui:cartUiSlice.reducer
    }
})

export default store