"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import Button from "../common/Button";
import { verifyOtp } from "@/services/adminService";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";
export default function VerifyOtpForm() {
  const router = useRouter();

  useRedirectIfAuthenticated();

  const searchParams = useSearchParams();

  const username = searchParams.get("username") || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp.trim()) {
      toast.error("OTP is required.");
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
      <h1 className="mb-2 text-center text-3xl font-bold text-primary-700">
        Verify OTP
      </h1>

      <p className="mb-8 text-center text-sm text-neutral-500">
        Enter the OTP sent to your registered email.
      </p>

      <div className="mb-5">
        <label className="mb-2 block font-medium">
          Username
        </label>

        <input
          type="text"
          value={username}
          readOnly
          className="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-3"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-medium">
          OTP
        </label>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-primary-600"
        />
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