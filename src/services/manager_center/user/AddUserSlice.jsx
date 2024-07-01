import { apiSlice } from "../../apiSlice";

export const AddUserSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (Info) => {
        console.log("info", Info);
        return {
          url: `createUser`,
          method: "POST",
          body: Info,
        };
      },
    }),
  }),
});

export const { useAddUserMutation } = AddUserSlice;
