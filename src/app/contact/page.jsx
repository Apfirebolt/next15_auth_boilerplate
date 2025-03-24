"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "@/features/user/userSlice";
import React, { useState } from "react";
import PrivateRoute from "@/components/privateRoute";

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
    <div>
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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
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
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const PrivateContactPage = () => (
  <PrivateRoute>
    <ContactPage />
  </PrivateRoute>
);

export default PrivateContactPage;
