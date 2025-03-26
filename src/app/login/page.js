"use client";

import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  resetError,
  resetSuccess,
  resetMessage,
} from "@/features/auth/authSlice";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
    setTimeout(() => {
      dispatch(resetMessage());
    }, 3000);
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
    <Fragment>
      <Header />
      <main>
        <section className="w-3/4 mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4 text-center">LOGIN</h1>
          <div className="grid grid-cols-2 gap-4 border border-gray-300 p-4 rounded-lg">
            <div>
              <h2 className="text-2xl font-semibold">Welcome Back!</h2>
              <p className="text-gray-600">
                Please log in to access your account and continue where you left
                off.
              </p>
              {message && (
                <p className="text-accent bg-secondary px-2 py-1 mb-4">
                  {message}
                </p>
              )}
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    className="block text-lg font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500"
                    type="email"
                    id="email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-lg font-medium mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500"
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <button
                  className="bg-secondary text-white p-2 rounded"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gccv62ENrJE-GO2_qv_zckPeSPnfFfOOnQ&s"
                className="w-full h-auto rounded-full border border-gray-300"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
