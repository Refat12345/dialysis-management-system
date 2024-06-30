import { apiSlice } from "../../apiSlice";


const ManagerDashboardSlice = apiSlice.injectEndpoints(
    {
        endpoints:(builder)=>({
        getAllStatistics:builder.query({
            query:(id)=>({
                url:`getAllCenterStatistics/${id}`,
                method:"GET"
            })
        }),
        getAllCenters:builder.query ({
            query :()=>({
            url:"getAllCenters",
            method:"GET"
            })
        }),
        getMedicines:builder.query ({
            query :(id)=>{
                console.log(id);
            return{
            url:`getAllPieCharts/${id}`,
            method:"GET"
            }},
        })
        ,
        getCauseRenal:builder.query ({
            query :(id)=>({
            url:`allCauseRenalFailure/${id}`,
            method:"GET"
            })
        })
    }
)
}
)

export const { useGetAllCentersQuery , useGetAllStatisticsQuery , useGetCauseRenalQuery , useGetMedicinesQuery} = ManagerDashboardSlice