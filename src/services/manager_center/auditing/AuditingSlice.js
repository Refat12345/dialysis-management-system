import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
const AuditingSlice = apiSlice.injectEndpoints(
    {
        endpoints:(builder)=>({
            getAuditing:builder.query({
                query:(id)=>({
                    url:`getlogs/${id}`,
                    method:"GET",
                    headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
                })
                
        }),
        getMedicineAudit:builder.query({
            query:(id)=>({
                url:`getMedicineTakenWithRelations/${id}/medicine`,
                method:"GET",
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            })
            
    })
    }
)
}
)

export const {useGetAuditingQuery , useGetMedicineAuditQuery} = AuditingSlice