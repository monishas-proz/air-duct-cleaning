"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/services/adminService";
import toast from "react-hot-toast";
import Button from "../common/Button";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";
import { validateLogin } from "@/utils/validations/adminValidation";

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-neutral-800 outline-none transition duration-200 placeholder:text-neutral-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-100";

const errorInputClass =
  "w-full rounded-lg border border-red-500 bg-white px-3.5 py-2.5 text-neutral-800 outline-none transition duration-200 placeholder:text-neutral-400 focus:border-red-500 focus:ring-2 focus:ring-red-100";

export default function LoginForm() {
  const router = useRouter();

  useRedirectIfAuthenticated();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

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

    const validation = validateLogin(formData);

    setErrors(validation.errors);

    if (!validation.isValid) {
      return;
    }

    try {
      setLoading(true);

      const data = await loginAdmin(formData);

      toast.success(data.message);

      router.replace("/admin/categories");
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
      <h1 className="mb-8 text-center font-heading text-2xl font-bold tracking-tight text-neutral-900">
        Admin Login
      </h1>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Username
        </label>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          autoComplete="username"
          className={errors.username ? errorInputClass : inputClass}
        />

        {errors.username && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.username}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          autoComplete="current-password"
          className={errors.password ? errorInputClass : inputClass}
        />

        {errors.password && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.password}
          </p>
        )}
      </div>

      <p className="mb-6 -mt-2 text-right">
        <button
          type="button"
          onClick={() => router.push("/admin/forgot-password")}
          className="cursor-pointer text-sm font-medium text-primary-700 transition-colors hover:text-primary-800 hover:underline"
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
