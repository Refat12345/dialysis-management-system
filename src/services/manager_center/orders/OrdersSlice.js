import { apiSlice } from '../../apiSlice';
import Cookies from "js-cookie"
export const apiOrders = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query:()=>({
                url:"all-requests",
                method:"GET",
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            }),
            providesTags:["Orders"]
        }),
        changeStatus: builder.mutation({
            query :(body) => ({
                url:"change-request-status",
                method:"POST",
                body:body,
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            }),
            invalidatesTags:["Orders"]
        })
    })
});

export const {
useGetAllOrdersQuery,
useChangeStatusMutation
} = apiOrders;