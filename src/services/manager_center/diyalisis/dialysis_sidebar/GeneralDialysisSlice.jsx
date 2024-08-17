import { apiSlice } from "../../../apiSlice";

import Cookies from "js-cookie"
export const GeneralDialysisSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGeneralDialysis: builder.query({
      query: ({ month, year ,centeId}) => {
    
        return {
          url: `getDialysisSessions/${centeId}/${month}/${year}`,
          method: "GET",
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
    }),
    getDialysisByPatient: builder.query({
      query: ({ userId,month, year }) => {
        return {
          url: `getPatientDialysisSessions/${userId}/${month}/${year}`,
          method: "GET",
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
    }),
  }),
});
// eslint-disable-next-line react-refresh/only-export-components
export const {  useGetGeneralDialysisQuery,useGetDialysisByPatientQuery } = GeneralDialysisSlice;


