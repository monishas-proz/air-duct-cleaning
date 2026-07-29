import { Suspense } from "react";
import VerifyOtpForm from "@/components/admin/VerifyOtpForm";

export default function VerifyOtpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100 p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyOtpForm />
      </Suspense>
    </div>
  );
}