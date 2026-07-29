"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Button from "../common/Button";
import { forgotPassword } from "@/services/adminService";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";
export default function ForgotPasswordForm() {
  const router = useRouter();

  useRedirectIfAuthenticated();

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      toast.error("Username is required.");
      return;
    }

    try {
      setLoading(true);

      const data = await forgotPassword(username);

      toast.success(data.message);

      router.push(
        `/admin/verify-otp?username=${encodeURIComponent(username)}`
      );
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
        Forgot Password
      </h1>

      <div className="mb-6">
        <label className="mb-2 block font-medium">
          Username
        </label>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-primary-600"
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Sending OTP..." : "Send OTP"}
      </Button>

      <p className="mt-6 text-center text-sm text-neutral-600">
        Remember your password?{" "}
        <button
          type="button"
          onClick={() => router.push("/admin/login")}
          className="font-medium text-primary-700 hover:underline cursor-pointer"
        >
          Back to Login
        </button>
      </p>
    </form>
  );
}