import {apiSlice} from '../../apiSlice'

export const CenterSettingSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCenterSetting: builder.query({
      query: () => ({
        url: `/center/1`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCenterSettingQuery } = CenterSettingSlice;
