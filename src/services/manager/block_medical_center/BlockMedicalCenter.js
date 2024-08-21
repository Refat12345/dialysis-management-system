import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"

const BlockMedicalCenter = apiSlice.injectEndpoints(
    {
        endpoints:(builder)=>({
        blockMedicalCenter:builder.mutation({
            query:(id)=>({
                url:`blockMedicalCenter/${id}`,
                method:"POST",
                headers:{'Authorization': `Bearer ${Cookies.get("token")}`},
            })
        }),
    }
)
}
)

export const { useBlockMedicalCenterMutation } = BlockMedicalCenter