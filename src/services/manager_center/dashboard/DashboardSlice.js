import { apiSlice } from '../../apiSlice';

export const apiDashboard = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSessions: builder.query({
            query: () => ({
                url: '/getDialysisSessions/0/5/2024',
                method: 'GET',
            }),
        }),
        getStatistics : builder.query({
            query :()=>({
                url:"/getStatistics",
                method:"GET"
            }), 
        }),
        getPieCharts:builder.query({
            query :()=>({
                url:"/getPieCharts",
                method:"GET"
            })
        })
    })
});

export const {
    useGetSessionsQuery,
    useGetStatisticsQuery,
    useGetPieChartsQuery
} = apiDashboard;