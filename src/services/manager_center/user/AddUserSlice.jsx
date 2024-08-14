/* eslint-disable react-refresh/only-export-components */
import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
import { incrementOrderCount } from "../orders/OrdersSlice";
export const AddUserSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

    addUser: builder.mutation({
        query: (Info) => { 
            console.log("info",Info)
            return {
                url: `createUser`,
                method: 'POST',
                body: Info,
                headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
            };  
        },
        invalidatesTags:  ['Orders'],
        async onQueryStarted(createUser, { dispatch, queryFulfilled }) {
            try {
                await queryFulfilled;
                dispatch(incrementOrderCount());
            } catch (err) {
                console.error("Failed to create medical record: ", err);
            }
        }
    }),
  }),
});

export const { useAddUserMutation } = AddUserSlice;
