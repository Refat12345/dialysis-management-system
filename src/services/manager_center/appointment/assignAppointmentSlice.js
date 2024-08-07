import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
const AssignAppointmentsSlice = apiSlice.injectEndpoints(
    {
        endpoints:(builder)=>({
            assignAppointment:builder.query({
                query:(body)=>({
                    url:`assignAppointmentToUser/${body.appointmentID}/${body.userID}`,
                    method:"POST",
                    headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
                    body:{
                        "deviceToken": "dhlqQdVWT5-w8aMbDO7C6s:APA91bHnK50EyyMiOsCzvb298QW9P-r4kTJT6wC6UeZSGo-f7IPnyEjazBc0qT7XxI4hFWR9quMrMKqZ1LsiEtQliNXULUJN32LuZBDzfr55O3jM3yJv0_UX9eEKr9f022dDjZela6X9",   
                        "deviceID": "9398"
                    }
                })
            }),
        }
)
}
)

export const {useAssignAppointmentQuery} = AssignAppointmentsSlice