import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const apiSlice = createApi({
    reducerPath: 'api',
    
    baseQuery: fetchBaseQuery({
        credentials: 'same-origin',
        baseUrl: "http://localhost:8000/api/",
        // baseUrl: "http://localhost:8080/graduation-backend/public/api/",
        headers:{'Authorization': `Bearer ${Cookies.get("token")}`}
    }),

    endpoints: () => ({}),
});

