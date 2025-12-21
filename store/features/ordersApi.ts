import { apiSlice } from "../apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Order"],
    }),
    checkout: builder.mutation({
      query: (orderId) => ({
        url: "/payment/checkout",
        method: "POST",
        body: { orderId },
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useCheckoutMutation,
  useCreateOrderMutation,
} = ordersApi;
