import { apiSlice } from "../apiSlice"; 

export const AssignMaterialToUserCenterSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        AssignMaterialToUser: builder.mutation({
        query: (medicalRecord) => { 
            console.log("jj",medicalRecord)
            return {
                url: `assignMaterialToUserCenter`,
                method: 'POST',
                body: medicalRecord,
                
            };
            
        },
    }),
 
  
})

});

export const {
useAssignMaterialToUserMutation
} = AssignMaterialToUserCenterSlice;