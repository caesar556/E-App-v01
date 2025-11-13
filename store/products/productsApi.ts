import { apiSlice } from "../apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ category, range, sort, page = 1 }) => ({
        url: "/products",
        params: {
          category: category !== "all" ? category : undefined,
          "price[gte]": range[0],
          "price[lte]": range[1],
          sort:
            sort === "highest"
              ? "-price"
              : sort === "lowest"
                ? "price"
                : sort === "newest"
                  ? "-createdAt"
                  : sort === "oldest"
                    ? "createdAt"
                    : undefined,
          page,
          limit: 10,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => newItems,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;