"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useRedirectIfAuthenticated() {
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/admin/auth", {
          credentials: "include",
        });

        if (response.ok) {
          router.replace("/admin/categories");
        }
      } catch (error) {
        console.error(error);
      }
    }

    checkAuth();
  }, [router]);
}