import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { processResult } from "immer/dist/internal";

export const apiSlicer = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
