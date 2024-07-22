"use client";

import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetchers";

interface IAuthRedirectProps {
  to: string;
  condition: "loggedIn" | "loggedOut";
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
  const router = useRouter();

  const { data, isLoading } = useSWR<{ uuid: string }>(swrKeys.user, fetcher);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!data && condition === "loggedOut") {
      console.log("Redirecting to", to);
      router.push(to);
    }

    if (data && condition === "loggedIn") {
      console.log("Logged in, redirecting to", to);
      router.push(to);
    }
  }, [data, isLoading, router, condition, to]);

  return null;
};
