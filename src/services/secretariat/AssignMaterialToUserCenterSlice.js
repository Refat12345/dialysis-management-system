import { apiSlice } from "../apiSlice"; 
import Cookies from "js-cookie"
import { incrementOrderCount } from "../manager_center/orders/OrdersSlice";
export const AssignMaterialToUserCenterSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        AssignMaterialToUser: builder.mutation({
        query: (medicalRecord) => { 
            return {
                url: `assignMaterialToUserCenter`,
                method: 'POST',
                body: medicalRecord,
                headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
            };
        },
        invalidatesTags:["Orders"],
        async onQueryStarted(medicalRecord, { dispatch, queryFulfilled }) {
            try {
                await queryFulfilled;
                dispatch(incrementOrderCount());
            } catch (err) {
                console.error("Failed to create medical record: ", err);
            }
        }
    }),
 
  
})

});

export const {
useAssignMaterialToUserMutation
} = AssignMaterialToUserCenterSlice;