import { configureStore } from "@reduxjs/toolkit";
import authSlice, { authActions } from "./auth-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store