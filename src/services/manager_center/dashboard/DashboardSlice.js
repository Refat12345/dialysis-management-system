// import { apiSlice } from '../../apiSlice';
// import Cookies from "js-cookie"
// export const apiDashboard = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         getSessions: builder.query({
//             query: () => ({
//                 url: 'getNurseDialysisSessions/active',
//                 method: 'GET',
//                 headers: {"Authorization" : `Bearer ${Cookies.get("token")} `}
//             }),
//         }),
//         getCenterStatistics: builder.query({
//             query :()=>({
//                 url:"getCenterStatistics",
//                 method:"GET",
//                 headers: {"Authorization" : `Bearer ${Cookies.get("token")} `}
//             })
//         }),
//         getCausesRenalFailure : builder.query({
//             query :()=>({
//                 url:"causeRenalFailure",
//                 method:"GET",
//                 headers: {"Authorization" : `Bearer ${Cookies.get("token")} `}
//             }), 
//         }),
//         getPieCharts:builder.query({
//             query :(data)=>{
//                 return{
//                 url:(data.month != "الشهر" && data.year != "السنة" ) ?`getPieCharts/${data.month}/${data.year}`:"getPieCharts",
//                 method:"GET",
//                 headers: {"Authorization" : `Bearer ${Cookies.get("token")} `}
//             }
//             }
//         })
//     })
// });

// export const {
//     useGetSessionsQuery,
//     useGetCenterStatisticsQuery,
//     useGetPieChartsQuery,
//     useGetCausesRenalFailureQuery
// } = apiDashboard;


import { apiSlice } from '../../apiSlice';
import Cookies from "js-cookie";

export const apiDashboard = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSessions: builder.query({
            query: () => ({
                url: 'getNurseDialysisSessions/active',
                method: 'GET',
                headers: {"Authorization" : `Bearer ${Cookies.get("token")}`}
            }),
        }),
        getCenterStatistics: builder.query({
            query: () => ({
                url: "getCenterStatistics",
                method: "GET",
                headers: {"Authorization" : `Bearer ${Cookies.get("token")}`}
            }),
        }),
        getCausesRenalFailure: builder.query({
            query: () => ({
                url: "causeRenalFailure",
                method: "GET",
                headers: {"Authorization" : `Bearer ${Cookies.get("token")}`}
            }), 
        }),
        getPieCharts: builder.query({
            query: (data) => {
                const { month, year } = data;
                
                // قم بإنشاء شرط لاستدعاء الـ API فقط إذا كانت كل من السنة والشهر مختلفين عن "الكل"
                if (month !== "الكل" && year !== "الكل") {
                    return {
                        url: `getPieCharts/${month}/${year}`,
                        method: "GET",
                        headers: { "Authorization": `Bearer ${Cookies.get("token")}` }
                    };
                }
        
                // إذا كان أي منهما "الكل"، لا تقم بإرسال أي طلب.
                return {
                    url: "getPieCharts",
                    method: "GET",
                    headers: { "Authorization": `Bearer ${Cookies.get("token")}` }
                };
            }
        })
        
    })
});

export const {
    useGetSessionsQuery,
    useGetCenterStatisticsQuery,
    useGetPieChartsQuery,
    useGetCausesRenalFailureQuery
} = apiDashboard;
