import { apiSlice } from "./apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import userSlice from "./userSlice";
import  ordersSlice  from "./manager_center/orders/OrdersSlice";
export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        orders:ordersSlice,
        user:userSlice,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)