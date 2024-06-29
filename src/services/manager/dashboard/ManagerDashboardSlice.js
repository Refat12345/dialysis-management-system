import { apiSlice } from "../../apiSlice";

const ManagerDashboardSlice = apiSlice.injectEndpoints(
    {
        endpoints:(builder)=>({
            getAllStatistics:builder.query({
                query:()=>({
                    url:`getAllCenterStatistics`
                })
        })
    }
)
}
)

export const {useGetAllStatisticsQuery} = ManagerDashboardSlice