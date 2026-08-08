"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Button from "../common/Button";
import { resetPassword } from "@/services/adminService";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";
import { validateResetPassword } from "@/utils/validations/adminValidation";

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-neutral-800 outline-none transition duration-200 placeholder:text-neutral-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-100";

const errorInputClass =
  "w-full rounded-lg border border-red-500 bg-white px-3.5 py-2.5 text-neutral-800 outline-none transition duration-200 placeholder:text-neutral-400 focus:border-red-500 focus:ring-2 focus:ring-red-100";

export default function ResetPasswordForm() {
  const router = useRouter();

  useRedirectIfAuthenticated();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("reset_token");

    if (!token) {
      toast.error("Reset session expired.");
      router.replace("/admin/forgot-password");
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateResetPassword({
      password: formData.newPassword,
      confirmPassword: formData.confirmPassword,
    });

    setErrors(validation.errors);

    if (!validation.isValid) {
      return;
    }

    try {
      setLoading(true);

      const data = await resetPassword(formData.newPassword);

      toast.success(data.message);

      sessionStorage.removeItem("reset_token");

      router.replace("/admin/login");
    } catch (error) {
      if (error.errors) {
        setErrors(error.errors);
      } else {
        toast.error(error.message);
      }

      if (error.status === 401 || error.status === 403) {
        sessionStorage.removeItem("reset_token");
        router.replace("/admin/forgot-password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
    >
      <h1 className="text-center font-heading text-2xl font-bold tracking-tight text-neutral-900">
        Reset Password
      </h1>

      <p className="mb-8 mt-2 text-center text-sm text-neutral-500">
        Choose a new password for your account.
      </p>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          New Password
        </label>

        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="Enter new password"
          autoComplete="new-password"
          className={errors.newPassword ? errorInputClass : inputClass}
        />

        {errors.newPassword && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.newPassword}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Confirm Password
        </label>

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm new password"
          autoComplete="new-password"
          className={errors.confirmPassword ? errorInputClass : inputClass}
        />

        {errors.confirmPassword && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.confirmPassword}
          </p>
        )}
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
          className="cursor-pointer font-medium text-primary-700 transition-colors hover:text-primary-800 hover:underline"
        >
          Back to Login
        </button>
      </p>
    </form>
  );
}
