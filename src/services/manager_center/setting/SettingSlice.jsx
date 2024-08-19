import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
import { incrementOrderCount } from "../orders/OrdersSlice";
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
      invalidatesTags:["Orders"],
      async onQueryStarted(shift, { dispatch, queryFulfilled }) {
        try {
            await queryFulfilled;
            dispatch(incrementOrderCount());
        } catch (err) {
            console.error("Failed to create medical record: ", err);
        }
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
      invalidatesTags:["Orders"],
      async onQueryStarted(chair, { dispatch, queryFulfilled }) {
        try {
            await queryFulfilled;
            dispatch(incrementOrderCount());
        } catch (err) {
            console.error("Failed to create medical record: ", err);
        }
    },
    
    }),

    addMedicalData: builder.mutation({
      query: (data) => {
  

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
    
        return {
          url: `updateMedicalCenter`,
          method: "POST",
          body: data,
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },
      invalidatesTags: ["CenterSetting"],

    }),

    updateChair: builder.mutation({
      query: (data) => {

        console.log("rrrr",data)
    
        return {
          url: `updateChair`,
          method: "POST",
          body: data,
          headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
        };
      },

    }),

    getChairInCenter: builder.query({
      query: (id) =>
         ({
        url: `/getChairsInCenter/${id}`,
        method: "GET",
        headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
      }),
    }),
    
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const {
  useGetCenterSettingQuery,
  useAddShiftMutation,
  useAddCenterContactMutation,
  useEditShiftMutation,
  useAddChairMutation,
  useAddMedicalDataMutation,
  useUpdateMedicalDataMutation,
  useUpdateChairMutation,
  useGetChairInCenterQuery
} = CenterSettingSlice;
