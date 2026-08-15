"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineKey,
  HiOutlineSparkles,
} from "react-icons/hi2";
import {
  register as registerUser,
  resetError,
  resetSuccess,
  resetMessage,
} from "@/features/auth/authSlice";
import Header from "@/components/header";
import Footer from "@/components/footer";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth
  );
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValue = watch("password", "");

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    setTimeout(() => {
      dispatch(resetMessage());
    }, 4000);
  };

  useEffect(() => {
    if (isError) {
      dispatch(resetError());
    }
    if (isSuccess) {
      dispatch(resetSuccess());
    }
  }, [isError, isSuccess, dispatch]);

  const passwordRequirements = [
    { label: "At least 8 characters", met: passwordValue.length >= 8 },
    { label: "Contains a number or symbol", met: /[\d\W]/.test(passwordValue) },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/60 dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Side: Registration Form */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-6 xl:p-16">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Get Started Free
                </div>
                <h1 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                  Create an account
                </h1>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  Set up your workspace and secure authentication in minutes.
                </p>
              </div>

              {/* Status Message */}
              {message && (
                <div
                  className={`mb-6 rounded-lg border p-3.5 text-xs font-medium ${
                    isError
                      ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-300"
                      : "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300"
                  }`}
                >
                  {message}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Full Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Full Name
                  </label>
                  <div className="relative mt-1.5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                      <HiOutlineUser className="h-4 w-4" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      placeholder="Alex Rivera"
                      autoComplete="name"
                      className={`w-full rounded-lg border bg-transparent py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 dark:text-white dark:placeholder:text-neutral-600 ${
                        errors.name
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                      }`}
                      {...register("name", {
                        required: "Full name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Address Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Work Email
                  </label>
                  <div className="relative mt-1.5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                      <HiOutlineEnvelope className="h-4 w-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      autoComplete="email"
                      className={`w-full rounded-lg border bg-transparent py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 dark:text-white dark:placeholder:text-neutral-600 ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                      }`}
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Password
                  </label>
                  <div className="relative mt-1.5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                      <HiOutlineLockClosed className="h-4 w-4" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className={`w-full rounded-lg border bg-transparent py-2 pl-9 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 dark:text-white dark:placeholder:text-neutral-600 ${
                        errors.password
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                      }`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                    >
                      {showPassword ? (
                        <HiOutlineEyeSlash className="h-4 w-4" />
                      ) : (
                        <HiOutlineEye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                  )}

                  {/* Dynamic Password Hints */}
                  <div className="mt-2.5 space-y-1">
                    {passwordRequirements.map((req) => (
                      <div
                        key={req.label}
                        className={`flex items-center gap-1.5 text-[11px] transition-colors ${
                          req.met
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-neutral-400 dark:text-neutral-500"
                        }`}
                      >
                        <HiOutlineCheckCircle
                          className={`h-3.5 w-3.5 ${
                            req.met ? "text-emerald-500" : "text-neutral-300 dark:text-neutral-700"
                          }`}
                        />
                        <span>{req.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <span>{isLoading ? "Creating account..." : "Create Account"}</span>
                  {!isLoading && <HiOutlineArrowRight className="h-4 w-4" />}
                </button>
              </form>

              {/* Login Link */}
              <div className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-white"
                >
                  Sign in instead
                </Link>
              </div>
            </div>

            {/* Right Side: Showcase Panel */}
            <div className="hidden flex-col justify-between border-l border-neutral-200 bg-neutral-50/70 p-8 lg:flex lg:col-span-6 lg:p-12 dark:border-neutral-800 dark:bg-neutral-900/30">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-800 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                  Developer Experience
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Everything you need to secure your modern application.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Production-grade session infrastructure, token rotation, and identity providers out of the box.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-neutral-200/80 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                      <HiOutlineSparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Instant Setup
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Drop-in middleware and Redux state hooks for seamless state management.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-neutral-200/80 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                      <HiOutlineShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Encrypted Storage
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        State-of-the-art password hashing with salted PBKDF2/Argon2.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-neutral-200/80 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                      <HiOutlineKey className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Session & Token Rotation
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Automated refresh token cycles to protect against session hijacking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                <p className="text-[11px] text-neutral-400 dark:text-neutral-500">
                  By creating an account, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;