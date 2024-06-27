import { apiSlice } from "./apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import userSlice from "./userSlice";
export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        user:userSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)