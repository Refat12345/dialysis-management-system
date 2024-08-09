import { apiSlice } from "../../../apiSlice";
import Cookies from "js-cookie"
export const NotePatientSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNoteForPatient: builder.query({
      query: (status) => ({
        url: `getNotesByreceiverID/${status}`,
        method: "GET",
        headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
      }),
    }),

    sendNote: builder.mutation({
      query: (data) => {
        return {
          url: `createNote`,
          method: "POST",
          body: data,
          headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
        };
      },
    }),
  }),
});

export const { useGetNoteForPatientQuery,useSendNoteMutation } = NotePatientSlice;
