import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from "js-cookie"


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        credentials: 'same-origin',
        baseUrl: "http://127.0.0.1:8000/api/",
        headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
    }),
    

    endpoints: () => ({}),
});

