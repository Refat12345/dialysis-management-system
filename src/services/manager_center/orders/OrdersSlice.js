import { apiSlice } from '../../apiSlice';

export const apiOrders = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query:()=>({
                url:"",
                method:"GET"
            })
        })
    })
});

export const {
useGetAllOrdersQuery
} = apiOrders;