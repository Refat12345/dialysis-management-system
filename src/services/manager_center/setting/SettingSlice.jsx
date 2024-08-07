import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
export const CenterSettingSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCenterSetting: builder.query({
      query: (id) => ({
        url: `/center/${id}`,
        method: "GET",
        headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
      }),
      providesTags: ["CenterSetting"],
    }),
    addShift: builder.mutation({
      query: (shiftRecord) => {
        
        return {
          url: `shifts`,
          method: "POST",
          body: shiftRecord,
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
    }),
    addCenterContact: builder.mutation({
      query: (telcomeRecord) => {
        return {
          url: `createCenterTelecoms`,
          method: "POST",
          body: telcomeRecord,
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
      invalidatesTags: ["CenterSetting"],
    }),
    editShift: builder.mutation({
      query: (shiftRecord) => {
        return {
          url: `updateShift`,
          method: "POST",
          body: shiftRecord,
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
      invalidatesTags: ["CenterSetting"],
    }),

    addChair: builder.mutation({
      query: (chair) => {
        return {
          url: `chairs`,
          method: "POST",
          body: chair,
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
    }),

    addMedicalData: builder.mutation({
      query: (data) => {
        console.log("adddd  is")

        return {
          url: `createMedicalCenter`,
          method: "POST",
          body: data,
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
      invalidatesTags: ["CenterSetting"],

    }),


    updateMedicalData: builder.mutation({
      query: (data) => {
        console.log("uppp is" , data)
        return {
          url: `updateMedicalCenter`,
          method: "POST",
          body: data,
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
      invalidatesTags: ["CenterSetting"],

    }),
    
  }),
});

export const {
  useGetCenterSettingQuery,
  useAddShiftMutation,
  useAddCenterContactMutation,
  useEditShiftMutation,
  useAddChairMutation,
  useAddMedicalDataMutation,
  useUpdateMedicalDataMutation
} = CenterSettingSlice;
