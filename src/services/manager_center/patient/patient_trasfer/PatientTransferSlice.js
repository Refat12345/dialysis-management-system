import { apiSlice } from "../../../apiSlice";

export const TransferPatientSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        transferPatient:builder.mutation(
            {
                query:(body)=>({
                    url:"patient-transfer-requests",
                    method:"POST",
                    body:body
                })
            }
        )
    })
});

export const {useTransferPatientMutation} = TransferPatientSlice