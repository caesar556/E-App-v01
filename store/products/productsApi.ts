import { apiSlice } from "../apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ range, sort, page = 1, limit = 10 }) => {
        const params = new URLSearchParams();
        const sortMap = {
          newest: "-createdAt",
          oldest: "createdAt",
          highest: "-price",
          lowest: "price",
        };

        if (range) {
          params.append("price[gte]", String(range[0]));
          params.append("price[lte]", String(range[1]));
        }

        if (sort && sortMap[sort]) params.append("sort", sortMap[sort]);

        params.append("page", String(page));
        params.append("limit", String(limit));

        return `/products?${params.toString()}`;
      },
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
