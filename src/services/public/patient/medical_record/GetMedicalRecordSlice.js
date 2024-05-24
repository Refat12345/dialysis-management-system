import { apiSlice } from "../../../apiSlice";

export const apiMedicalRecord = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedicalRecord: builder.query({
            query: (id) => ({
                url: `showMedicalRecord/${id}`,
                method: 'GET',
            }),
        }),
    })

});

export const {useGetMedicalRecordQuery } = apiMedicalRecord