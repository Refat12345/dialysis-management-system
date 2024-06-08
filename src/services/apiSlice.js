import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        credentials: 'same-origin',
        baseUrl: "http://localhost:8000/api/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if(token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
        baseUrl: "http://localhost:8000/api",
        headers:{'Authorization': `Bearer ${Cookies.get("token")}`}
    }),

    endpoints: () => ({}),
});

