import { apiSlice } from '../../apiSlice';
import Cookies from "js-cookie"
export const DisbursedMaterialsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDisbursedMaterials : builder.query({
        query:()=>({
            url:"getAllUsersWithDisbursedMaterials",
            method:"GET",
            headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
        })
        }) 
    })
});

export const {
useGetDisbursedMaterialsQuery
} = DisbursedMaterialsSlice;