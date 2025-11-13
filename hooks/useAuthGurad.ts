"use client";
import { useEffect, useState } from "react";
import { useAuthMeQuery, useRefreshTokenMutation } from "@/store/auth/authApi";
import { useRouter } from "next/navigation";

export function useAuthGuard(redirectTo = "/login") {
  const router = useRouter();
  const [hasRefreshed, setHasRefreshed] = useState(false);
  const [refreshToken] = useRefreshTokenMutation();
  const { data, isLoading, isError, refetch } = useAuthMeQuery(undefined, {
    skip: false,
  });

  useEffect(() => {
    const handleAuth = async () => {
      if (!isLoading) {
        if (isError && !hasRefreshed) {
          try {
            await refreshToken().unwrap();
            setHasRefreshed(true);
            refetch();
          } catch {
            router.push(redirectTo);
          }
        } else if (isError && hasRefreshed) {
          router.push(redirectTo);
        }
      }
    };

    handleAuth();
  }, [
    isLoading,
    isError,
    hasRefreshed,
    refreshToken,
    refetch,
    router,
    redirectTo,
  ]);
  return {
    //@ts-ignore
    user: data?.data?.user ?? null,
    isLoading,
  };
}
