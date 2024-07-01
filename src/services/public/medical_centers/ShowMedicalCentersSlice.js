import { apiSlice } from '../../apiSlice';
import Cookies from "js-cookie"
export const apiShowMedicalCenters = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalCenters: builder.query({
            query: () => ({
                url: 'getAllMedicalCenters',
                method: 'GET',
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
                
            }),
        }),
    })
});

export const {
  useGetMedicalCentersQuery
} = apiShowMedicalCenters;