import { apiSlice } from "../../../apiSlice"; 
import Cookies from "js-cookie"
export const DialysisDetailsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDialysisDetails: builder.query({
      query: (id) => ({
        url: `getDialysisSessionDetails/${id}`,
        method: "GET",
        headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
      }),
    }),
  }),
});

export const {useGetDialysisDetailsQuery} = DialysisDetailsSlice;

