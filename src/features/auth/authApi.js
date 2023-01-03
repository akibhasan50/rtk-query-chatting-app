import { apiSlicer } from "../apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlicer.injectEndpoints({
  //endpoints goes here
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "aith",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
          dispatch(userLoggedIn(result.data));
        } catch (error) {
            
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
