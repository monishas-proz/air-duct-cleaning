"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAdminAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/admin/auth", {
          credentials: "include",
        });

        if (!response.ok) {
          router.replace("/admin/login");
          return;
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        router.replace("/admin/login");
      }
    }

    checkAuth();
  }, [router]);

  return loading;
}