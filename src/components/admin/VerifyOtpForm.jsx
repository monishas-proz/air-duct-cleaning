"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import Button from "../common/Button";
import { verifyOtp } from "@/services/adminService";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";
import { validateOtp } from "@/utils/validations/adminValidation";

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-neutral-800 outline-none transition duration-200 placeholder:text-neutral-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-100";

const errorInputClass =
  "w-full rounded-lg border border-red-500 bg-white px-3.5 py-2.5 text-neutral-800 outline-none transition duration-200 placeholder:text-neutral-400 focus:border-red-500 focus:ring-2 focus:ring-red-100";

export default function VerifyOtpForm() {
  const router = useRouter();

  useRedirectIfAuthenticated();

  const searchParams = useSearchParams();

  const username = searchParams.get("username") || "";

  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateOtp({
      otp,
    });

    setErrors(validation.errors);

    if (!validation.isValid) {
      return;
    }

    try {
      setLoading(true);

      const data = await verifyOtp({
        username,
        otp,
      });

      sessionStorage.setItem("reset_token", data.resetToken);

      toast.success(data.message);

      router.push("/admin/reset-password");
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
        Verify OTP
      </h1>

      <p className="mb-8 mt-2 text-center text-sm text-neutral-500">
        Enter the OTP sent to your registered email.
      </p>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Username
        </label>

        <input
          type="text"
          value={username}
          readOnly
          className="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3.5 py-2.5 text-neutral-500"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          OTP
        </label>

        <input
          type="text"
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value);

            setErrors((prev) => ({
              ...prev,
              otp: "",
            }));
          }}
          placeholder="Enter OTP"
          inputMode="numeric"
          autoComplete="one-time-code"
          className={errors.otp ? errorInputClass : inputClass}
        />

        {errors.otp && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.otp}
          </p>
        )}
      </div>

      <Button
        variant="primary"
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </Button>
    </form>
  );
}
