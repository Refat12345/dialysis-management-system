import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        credentials: 'same-origin',
        baseUrl: "http://localhost:8000/api/",
        // headers:{'Authorization': `Bearer ${Cookies.get("token")}`}
        headers: {
            'Authorization': 'Bearer 1|PxxVjoVXrx6fKPBxJOHzvaSsRtQpSRfIgn5imzZC0297ebdf'
          }
    }),

    endpoints: () => ({}),
});

