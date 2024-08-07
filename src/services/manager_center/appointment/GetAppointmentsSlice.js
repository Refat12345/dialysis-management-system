import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
const AppointmentsSlice = apiSlice.injectEndpoints(
    {
        endpoints:(builder)=>({
            getAppointments:builder.query({
                query:(id)=>({
                    url:`centerappointments/${id}`,
                    method:"GET",
                    headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
                }),
                providesTags:["Appointment"]
            }),
            getShifts:builder.query({
                query:(id)=>({
                    url:`shifts/center/${id}`,
                    method:"GET",
                    headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
                })
            }),
            getChairs:builder.query({
                query:(id)=>({
                    url:`getChairsInCenter/${id}`,
                    method:"GET",
                    headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
                })
            })
        }
)
}
)

export const {useGetAppointmentsQuery , useGetChairsQuery , useGetShiftsQuery} = AppointmentsSlice