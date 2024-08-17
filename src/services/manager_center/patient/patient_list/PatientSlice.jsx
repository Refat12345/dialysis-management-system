import { apiSlice } from "../../../apiSlice";
import Cookies from "js-cookie"
export const PatientSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    getPatient: builder.query({
      query: ({ option, centerId,role,selectedCenterId }) => {
        const id = role === 'superAdmin' ? selectedCenterId : centerId;

        return {
          url: `getCenterUsersByRole/${option === "انتظار" ? 0 : id}/patient/${option}`,
          method: "GET",
          headers: { "Authorization": `Bearer ${Cookies.get("token")}` }
        };
      },
      providesTags: ["hi"],
    }),

    getHangingPatient: builder.query({
      query: ({ centerId }) => {
        return {
          url: `getCenterUsersByRole/${centerId}/patient/معلق`,
          method: "GET",
          headers: { "Authorization": `Bearer ${Cookies.get("token")}` }
        };
      },
      providesTags: ["hi"],
    }),

    addToWaiting: builder.mutation({
      query: (id) => {
        return {
          url: `updatePatientStatus/${id}/انتظار`,
          method: "POST",
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
      invalidatesTags: ["hi"],

    }),

    getUnAcceptedPatient: builder.query({
      query: ({  centerId }) => {
        return {
        url: `getCenterUnAcceptedPatients/${centerId}`,
        method: "GET",
        headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
      }},
      providesTags:["globalInfo"]
    }),

    addFromWaitingToPending : builder.mutation({
      query: (data) => {
       
        return {
          url: `associateUserWithMyMedicalCenter`,
          method: "POST",
          body: data,
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
      invalidatesTags: ["hi"],

    }),

  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const { useGetPatientQuery,useAddToWaitingMutation,useGetUnAcceptedPatientQuery ,useGetHangingPatientQuery ,useAddFromWaitingToPendingMutation} = PatientSlice;
