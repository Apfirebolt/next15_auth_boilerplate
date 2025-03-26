"use client";

import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "@/features/user/userSlice";
import React, { useState } from "react";
import PrivateRoute from "@/components/privateRoute";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

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
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <main>
        <section className="container mx-auto p-6">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-primary">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Our Users
              </h2>
              <ul className="pl-5 space-y-2">
                {users.map((user) => (
                  <li
                    key={user._id}
                    className="text-gray-700 text-lg font-medium"
                  >
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Business Hours
              </h2>
              <p className="text-lg text-center mb-8 text-gray-600">
                Have any questions? Feel free to reach out to us using the form
                below. We'd love to hear from you!
              </p>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
              >
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <span className="px-3 text-gray-500">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <span className="px-3 text-gray-500">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <div className="flex items-start border border-gray-300 rounded-lg">
                    <span className="px-3 text-gray-500 pt-3">
                      <MdMessage />
                    </span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Write your message"
                      rows="5"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-3 px-4 rounded-lg font-semibold text-lg flex items-center justify-center hover:bg-accent transition duration-300"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
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
