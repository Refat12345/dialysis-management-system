import {apiSlice} from '../../apiSlice'

export const CenterSettingSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCenterSetting: builder.query({
      query: () => ({
        url: `/center/1`,
        method: "GET",
      }),
      providesTags: ['CenterSetting'],

    }),
    addShift: builder.mutation({
      query: (shiftRecord) => { 
          console.log("haaa",shiftRecord)
          return {
              url: `shifts`,
              method: 'POST',
              body: shiftRecord,
          };
          
      },
  }),
  addCenterContact: builder.mutation({
    query: (telcomeRecord) => { 
        console.log("haaa",telcomeRecord)
        return {
            url: `createCenterTelecoms`,
            method: 'POST',
            body: telcomeRecord,
        };   
    },
}),
editShift: builder.mutation({
  query: (shiftRecord) => { 
      console.log("hasssssaa",shiftRecord)
      return {
          url: `updateShift`,
          method: 'POST',
          body: shiftRecord,
      };
      
  },
  invalidatesTags: ['CenterSetting'],
}),
  }),
});

export const { useGetCenterSettingQuery,useAddShiftMutation,useAddCenterContactMutation , useEditShiftMutation } = CenterSettingSlice;
