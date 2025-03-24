"use client";

import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "@/features/user/userSlice";
import React, { useState } from "react";
import PrivateRoute from "@/components/privateRoute";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <main>
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          {users.length > 0 && (
            <div className="mb-6 text-center mx-auto container">
              <h3 className="text-xl font-semibold my-3">Users</h3>
              <ul className="pl-5">
                {users.map((user) => (
                  <li key={user._id} className="text-gray-700">
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-lg mb-4">
            Welcome to our website! Feel free to contact us using the form below.
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md w-1/2 mx-auto my-3"
          >
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-secondary text-white py-2 px-3 rounded hover:bg-accent"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

const PrivateContactPage = () => (
  <PrivateRoute>
    <ContactPage />
  </PrivateRoute>
);

export default PrivateContactPage;
