import { apiSlice } from "../../../apiSlice";


export const GeneralDialysisSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGeneralDialysis: builder.query({
      query: ({ month, year ,centeId}) => {
        
        return {
          
          url: `getDialysisSessions/0/${month}/${year}`,
          method: "GET",
        };
      },
    }),
    getDialysisByPatient: builder.query({
      query: ({ userId,month, year }) => {
        return {
          url: `getPatientDialysisSessions/${userId}/${month}/${year}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const {  useGetGeneralDialysisQuery,useGetDialysisByPatientQuery } = GeneralDialysisSlice;


