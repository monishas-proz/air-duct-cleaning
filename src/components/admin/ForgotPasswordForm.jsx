"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Button from "../common/Button";
import { forgotPassword } from "@/services/adminService";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";
import { validateForgotPassword } from "@/utils/validations/adminValidation";

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-neutral-800 outline-none transition duration-200 placeholder:text-neutral-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-100";

const errorInputClass =
  "w-full rounded-lg border border-red-500 bg-white px-3.5 py-2.5 text-neutral-800 outline-none transition duration-200 placeholder:text-neutral-400 focus:border-red-500 focus:ring-2 focus:ring-red-100";

export default function ForgotPasswordForm() {
  const router = useRouter();

  useRedirectIfAuthenticated();

  const [errors, setErrors] = useState({});

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateForgotPassword({
      username,
    });

    setErrors(validation.errors);

    if (!validation.isValid) {
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
      if (error.errors) {
        setErrors(error.errors);
      } else {
        toast.error(error.message);
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
        Forgot Password
      </h1>

      <p className="mb-8 mt-2 text-center text-sm text-neutral-500">
        Enter your username and we&apos;ll send you an OTP to reset your
        password.
      </p>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Username
        </label>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);

            setErrors((prev) => ({
              ...prev,
              username: "",
            }));
          }}
          autoComplete="username"
          className={errors.username ? errorInputClass : inputClass}
        />

        {errors.username && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.username}
          </p>
        )}
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
          className="cursor-pointer font-medium text-primary-700 transition-colors hover:text-primary-800 hover:underline"
        >
          Back to Login
        </button>
      </p>
    </form>
  );
}
