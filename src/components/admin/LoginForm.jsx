"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/services/adminService";
import toast from "react-hot-toast";
import Button from "../common/Button";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";

export default function LoginForm() {
  const router = useRouter();

  useRedirectIfAuthenticated();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const data = await loginAdmin(formData);

      // Save JWT
      localStorage.setItem("admin_token", data.token);

      toast.success(data.message);

      router.push("/admin/categories");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
    >
      <h1 className="mb-8 text-center text-3xl font-bold text-primary-700">
        Admin Login
      </h1>

      <div className="mb-5">
        <label className="mb-2 block font-medium">
          Username
        </label>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-primary-600"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-primary-600"
        />
      </div>

      <p className="mb-6 -mt-2 text-right">
        <button
          type="button"
          onClick={() => router.push("/admin/forgot-password")}
          className="text-sm text-primary-700 hover:underline cursor-pointer"
        >
          Forgot Password?
        </button>
      </p>

      <Button
        variant="primary"
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}