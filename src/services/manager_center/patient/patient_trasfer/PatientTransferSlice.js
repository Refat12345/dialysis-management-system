import { apiSlice } from "../../../apiSlice";
import Cookies from "js-cookie"
export const TransferPatientSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        transferPatient:builder.mutation(
            {
                query:(body)=>({
                    url:"patient-transfer-requests",
                    method:"POST",
                    body:body,
                    headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
                })
            }
        )
    })
});

export const {useTransferPatientMutation} = TransferPatientSlice