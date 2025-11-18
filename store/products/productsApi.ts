import { apiSlice } from "../apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ category, range, sort, page = 1 }) => {},
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;