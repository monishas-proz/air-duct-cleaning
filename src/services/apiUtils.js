export async function handleUnauthorized(response) {
  if (response.status === 401) {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }

    window.location.replace("/admin/login");
    return true;
  }

  return false;
}