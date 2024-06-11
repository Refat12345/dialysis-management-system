import { apiSlice } from '../../apiSlice';

export const apiDashboard = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSessions: builder.query({
            query: () => ({
                url: 'getDialysisSessions/0/5/2024',
                method: 'GET',
            }),
        }),
        getStatistics : builder.query({
            query :()=>({
                url:"getCenterStatistics",
                method:"GET"
            }), 
        }),
        getCausesRenalFailure : builder.query({
            query :()=>({
                url:"causeRenalFailure",
                method:"GET"
            }), 
        }),
        getPieCharts:builder.query({
            query :(data)=>{
                return{
                url:data.month != "" && data.year != "" ?`getPieCharts/${data.month}/${data.year}`:"getPieCharts",
                method:"GET"
            }
            }
        })
    })
});

export const {
    useGetSessionsQuery,
    useGetStatisticsQuery,
    useGetPieChartsQuery,
    useGetCausesRenalFailureQuery
} = apiDashboard;