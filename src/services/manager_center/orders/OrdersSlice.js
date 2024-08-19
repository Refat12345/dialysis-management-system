import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../../apiSlice';
import Cookies from "js-cookie";

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        totalOrdersCount: 0,
    },
    reducers: {
    incrementOrderCount: (state) => { 
        state.totalOrdersCount += 1;
    },
    decrementOrderCount: (state) => {
        state.totalOrdersCount -= 1;
    },
    setTotalOrdersCount: (state, action) => {
        state.totalOrdersCount = action.payload;
    },
},
});

export const { decrementOrderCount, setTotalOrdersCount , incrementOrderCount} = ordersSlice.actions;

export default ordersSlice.reducer;

export const apiOrders = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query:()=>{
            return{
                url:"all-requests",
                method:"GET",
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            }
        },
            providesTags:["Orders"],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const totalPendingOrders = data[0].filter(order => order.requestStatus === "pending").length;
                    dispatch(setTotalOrdersCount(totalPendingOrders));
                } catch (err) {
                    console.error(err);
                }
            },
        }),
        changeStatus: builder.mutation({
    
            query :(body) =>{
                return{
                url:"change-request-status",
                method:"POST",
                body:body,
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            }},
            invalidatesTags:["Orders"],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(decrementOrderCount());
                } catch (err) {
                    console.error(err);
                }
            },
        })
    })
});

export const {
  useGetAllOrdersQuery,
  useChangeStatusMutation
} = apiOrders;
