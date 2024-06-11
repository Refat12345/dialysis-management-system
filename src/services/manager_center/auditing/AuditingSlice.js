import { apiSlice } from "../../apiSlice";

const AuditingSlice = apiSlice.injectEndpoints(
    {
        endpoints:(builder)=>({
            getAuditing:builder.query({
                query:(id)=>({
                    url:`getlogs/${id}`
                })
        })
    }
)
}
)

export const {useGetAuditingQuery} = AuditingSlice