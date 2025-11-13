import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "./features/auhSlice";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("Api url is not defined");
}

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh-token",
        method: "POST",
      },
      api,
      extraOptions,
    );

    if (refreshResult?.error) {
      return refreshResult;
    }

    result = await baseQuery(args, api, extraOptions);
  }
  //@ts-ignore
  const user = result?.data?.data?.user;
  if (user) {
    api.dispatch(setUser(user));
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Cart", "Order", "Product"],
  endpoints: () => ({}),
});
