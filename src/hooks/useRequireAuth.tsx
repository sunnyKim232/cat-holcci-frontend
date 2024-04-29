"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function useRequireAuth() {
  const [accessToken, setAccessToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authorization");

    if (token) {
      setAccessToken(true);
      setLoading(false);
      router.push("/home");
    } else {
      setAccessToken(false);
      setLoading(true);
      router.push("/");
    }
  }, [router]);

  return [accessToken, loading];
}

export default useRequireAuth;
