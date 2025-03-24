"use client";

import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register as registerUser, resetError, resetSuccess } from "@/features/auth/authSlice";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const { isError, isSuccess, message } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(registerUser(data));
    };

    useEffect(() => {
        if (isError) {
            // Handle error
            dispatch(resetError());
        }

        if (isSuccess) {
            // Handle success
            dispatch(resetSuccess());
        }
    }, [isError, isSuccess, dispatch]);

    return (
        <Fragment>
            <Header />
            <main>
                <section className="container mx-auto p-6">
                    <h1 className="text-4xl font-bold mb-4">Register</h1>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-lg font-medium mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                id="name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (
                                <p className="text-red-500">{errors.name.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
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
                                className="w-full p-2 border border-gray-300 rounded"
                                type="password"
                                id="password"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && (
                                <p className="text-red-500">{errors.password.message}</p>
                            )}
                        </div>
                        <button
                            className="bg-blue-500 text-white p-2 rounded"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </Fragment>
    );
};

export default RegisterPage;
