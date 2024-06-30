import { apiSlice } from '../../apiSlice';

export const DisbursedMaterialsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDisbursedMaterials : builder.query({
        query:()=>({
            url:"getAllUsersWithDisbursedMaterials",
            method:"GET"
        })
        }) 
    })
});

export const {
useGetDisbursedMaterialsQuery
} = DisbursedMaterialsSlice;