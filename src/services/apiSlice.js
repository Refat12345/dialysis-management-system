import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const apiSlice = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        credentials: 'same-origin',
        baseUrl: "http://localhost:3008/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if(token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),

    endpoints: () => ({}),
});