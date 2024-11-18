import { apiSlice } from "../../../apiSlice";
import Cookies from "js-cookie"
export const BlockPatientSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        blocPatient: builder.mutation({
            query: (id) => ({
                url: `blockUser/${id}`,
                method: "POST",
                headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
    }),
    }),
}),
});

export const { useBlocPatientMutation } = BlockPatientSlice;
