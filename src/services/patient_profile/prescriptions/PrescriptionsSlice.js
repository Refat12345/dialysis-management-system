import { apiSlice } from "../../apiSlice";

export const apiPrescriptions = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPrescriptions: builder.query({
            query: (id) => ({
                url: `/${id}/getPrescriptions`,
                method: 'GET',
            }),
        }),
    })
});

export const {useGetPrescriptionsQuery} = apiPrescriptions