"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
  HiOutlineKey,
  HiOutlineServerStack,
} from "react-icons/hi2";
import {
  login,
  resetError,
  resetSuccess,
  resetMessage,
} from "@/features/auth/authSlice";
import Header from "@/components/header";
import Footer from "@/components/footer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth
  );
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
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

  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/60 dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Side: Login Form */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-6 xl:p-16">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Account Access
                </div>
                <h1 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                  Welcome back
                </h1>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  Enter your credentials to access your console and sessions.
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
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Email address
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
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-xs font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative mt-1.5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                      <HiOutlineLockClosed className="h-4 w-4" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className={`w-full rounded-lg border bg-transparent py-2 pl-9 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 dark:text-white dark:placeholder:text-neutral-600 ${
                        errors.password
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                      }`}
                      {...register("password", {
                        required: "Password is required",
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
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <span>{isLoading ? "Authenticating..." : "Sign in"}</span>
                  {!isLoading && <HiOutlineArrowRight className="h-4 w-4" />}
                </button>
              </form>

              {/* Registration Link */}
              <div className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-white"
                >
                  Create one now
                </Link>
              </div>
            </div>

            {/* Right Side: Identity Feature Showcase */}
            <div className="hidden flex-col justify-between border-l border-neutral-200 bg-neutral-50/70 p-8 lg:flex lg:col-span-6 lg:p-12 dark:border-neutral-800 dark:bg-neutral-900/30">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-800 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                  Next Auth Core
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Hardened authentication engineered for modern stacks.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Secure cryptographic token storage, distributed session replication, and zero-trust identity verification.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-neutral-200/80 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                      <HiOutlineShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Zero-Trust Security
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Strict cookie attributes, JWT rotation, and automatic CSRF defense.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-neutral-200/80 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                      <HiOutlineKey className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Multi-Provider Ready
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Seamless integration across OAuth, credentials, and passwordless flows.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-neutral-200/80 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                      <HiOutlineServerStack className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Edge Middleware Validation
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Verify sessions at the network boundary before database round-trips.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                <p className="text-[11px] text-neutral-400 dark:text-neutral-500">
                  Protected by end-to-end TLS encryption and automated rate limiting.
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

export default LoginPage;