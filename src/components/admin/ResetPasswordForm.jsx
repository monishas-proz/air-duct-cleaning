"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Button from "../common/Button";
import { resetPassword } from "@/services/adminService";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";

export default function ResetPasswordForm() {
  const router = useRouter();

  useRedirectIfAuthenticated();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("reset_token");

    if (!token) {
      toast.error("Reset session expired.");
      router.replace("/admin/forgot-password");
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = formData;

    if (!newPassword || !confirmPassword) {
        toast.error("Please fill all fields.");
        return;
        }

        const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(newPassword)) {
        toast.error(
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
        );
        return;
        }

        if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
        }

    try {
      setLoading(true);

      const data = await resetPassword(newPassword);

      toast.success(data.message);

      sessionStorage.removeItem("reset_token");

      router.replace("/admin/login");

   } catch (error) {
      toast.error(error.message);

      if (error.status === 401 || error.status === 403) {
        sessionStorage.removeItem("reset_token");
        router.replace("/admin/forgot-password");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
    >
      <h1 className="mb-8 text-center text-3xl font-bold text-primary-700">
        Reset Password
      </h1>

      <div className="mb-5">
        <label className="mb-2 block font-medium">
          New Password
        </label>

        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="Enter new password"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-primary-600"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-medium">
          Confirm Password
        </label>

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm new password"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-primary-600"
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Resetting..." : "Reset Password"}
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