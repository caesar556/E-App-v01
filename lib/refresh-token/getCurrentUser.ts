import { cookies } from "next/headers";

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.post("refreshToken")?.value;

    if (!refreshToken) {
      console.log("No refresh in Current user");
    }

    const res = await fetch(
      "https://e-app-api.vercel.app/api/auth/refresh-token",
      {
        method: "POST",
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
        credentials: "include",
      },
    );

    if (!res.ok) {
      console.log("res", res);
    }

    const data = await res.json();
    return data.user;
  } catch (err) {
    return null;
  }
}
