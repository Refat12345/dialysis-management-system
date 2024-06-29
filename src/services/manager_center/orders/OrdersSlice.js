import { apiSlice } from '../../apiSlice';

export const apiOrders = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query:()=>({
                url:"all-requests",
                method:"GET"
            }),
            providesTags:["Orders"]
        }),
        changeStatus: builder.mutation({
            query :(body) => ({
                url:"change-request-status",
                method:"POST",
                body:body
            }),
            invalidatesTags:["Orders"]
        })
    })
});

export const {
useGetAllOrdersQuery,
useChangeStatusMutation
} = apiOrders;