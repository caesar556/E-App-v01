"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGurad";
import { Spinner } from "@/components/ui/spinner";

export default function AuthGuardClient({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuthGuard();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user)
    return (
      <div className="flex justify-center items-center h-dvh">
        <Spinner className="size-8 text-purple-700" />
      </div>
    );

  return <>{children}</>;
}
