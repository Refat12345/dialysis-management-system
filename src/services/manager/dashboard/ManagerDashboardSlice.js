import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"

const ManagerDashboardSlice = apiSlice.injectEndpoints(
    {
        endpoints:(builder)=>({
        getAllStatistics:builder.query({
            query:(id)=>({
                url:`getAllCenterStatistics/${id}`,
                method:"GET",
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            })
        }),
        getAllCenters:builder.query ({
            query :()=>({
            url:"getAllCenters",
            method:"GET",
            headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            })
        }),
        getMedicines:builder.query ({
            query :(id)=>{
                console.log(id);
            return{
            url:`getAllPieCharts/${id}`,
            method:"GET",
            headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            }},
        })
        ,
        getCauseRenal:builder.query ({
            query :(id)=>({
            url:`allCauseRenalFailure/${id}`,
            method:"GET",
            headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            })
        })
    }
)
}
)

export const { useGetAllCentersQuery , useGetAllStatisticsQuery , useGetCauseRenalQuery , useGetMedicinesQuery} = ManagerDashboardSlice