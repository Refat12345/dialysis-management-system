import { apiSlice } from "../../apiSlice";
import Cookies from "js-cookie"
export const AddUserSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

    addUser: builder.mutation({
        query: (Info) => { 
            console.log("info",Info)
            return {
                url: `createUser`,
                method: 'POST',
                body: Info,
                headers:{"Authorization" : `Bearer ${Cookies.get("token")}`}
            };
            
        },
    }),
})
});

export const {
useAddUserMutation
} = AddUserSlice;