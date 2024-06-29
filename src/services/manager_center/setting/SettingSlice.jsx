import { apiSlice } from "../../apiSlice";

export const CenterSettingSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCenterSetting: builder.query({
      query: (id) => ({
        url: `/center/${id}`,
        method: "GET",
      }),
      providesTags: ["CenterSetting"],
    }),
    addShift: builder.mutation({
      query: (shiftRecord) => {
        return {
          url: `shifts`,
          method: "POST",
          body: shiftRecord,
        };
      },
    }),
    addCenterContact: builder.mutation({
      query: (telcomeRecord) => {
        return {
          url: `createCenterTelecoms`,
          method: "POST",
          body: telcomeRecord,
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
        };
      },
    }),
  }),
});

export const {
  useGetCenterSettingQuery,
  useAddShiftMutation,
  useAddCenterContactMutation,
  useEditShiftMutation,
  useAddChairMutation
} = CenterSettingSlice;
