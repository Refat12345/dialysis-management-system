import { apiSlice } from "../apiSlice"; 
import Cookies from "js-cookie"
export const AssignMaterialToUserCenterSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        AssignMaterialToUser: builder.mutation({
        query: (medicalRecord) => { 
            console.log("jj",medicalRecord)
            return {
                url: `assignMaterialToUserCenter`,
                method: 'POST',
                body: medicalRecord,
                headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
                
            };
            
        },
    }),
 
  
})

});

export const {
useAssignMaterialToUserMutation
} = AssignMaterialToUserCenterSlice;