"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "@/features/user/userSlice";
import PrivateRoute from "@/components/privateRoute";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlinePaperAirplane,
  HiOutlineBuildingOffice2,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const ContactPage = () => {
  const dispatch = useDispatch();
  const { users = [], isLoading } = useSelector((state) => state.user || {});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Title Section */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Support & Network
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
              Get in touch
            </h1>
            <p className="mt-3 text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              Have questions about integration, security architecture, or team accounts? Send us a message.
            </p>
          </div>

          {/* Main Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            
            {/* Left Column: Direct Inquiries & Active Directory */}
            <div className="space-y-6 lg:col-span-5">
              
              {/* Office & Operations Card */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 dark:border-neutral-800 dark:bg-neutral-900/40">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Operations & Support
                </h2>
                
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-neutral-700 shadow-sm dark:bg-neutral-800 dark:text-neutral-300">
                      <HiOutlineClock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-900 dark:text-white">
                        Support Window
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Monday – Friday, 9:00 AM – 6:00 PM UTC
                      </p>
                      <p className="mt-0.5 text-[11px] text-emerald-600 dark:text-emerald-400">
                        Average response time: &lt; 2 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-neutral-700 shadow-sm dark:bg-neutral-800 dark:text-neutral-300">
                      <HiOutlineBuildingOffice2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-900 dark:text-white">
                        Security & Incident Escalations
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        security@nextauth.internal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Directory List */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <HiOutlineUsers className="h-4 w-4 text-neutral-500" />
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                      Team Directory
                    </h3>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                    {users?.length || 0} Registered
                  </span>
                </div>

                <div className="mt-4 max-h-72 overflow-y-auto pr-1">
                  {isLoading ? (
                    <div className="py-8 text-center text-xs text-neutral-400">
                      Loading directory...
                    </div>
                  ) : users && users.length > 0 ? (
                    <ul className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
                      {users.map((user) => (
                        <li
                          key={user._id || user.id || user.email}
                          className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                              {(user.name || user.email || "U").charAt(0).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-xs font-medium text-neutral-900 dark:text-white">
                                {user.name || "Unnamed User"}
                              </p>
                              <p className="truncate text-[11px] text-neutral-500 dark:text-neutral-400">
                                {user.email}
                              </p>
                            </div>
                          </div>
                          <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0 ml-2" />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-8 text-center text-xs text-neutral-400">
                      No active users registered in the cluster.
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-100 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/60 dark:shadow-none">
                
                <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Send an Inquiry
                </h2>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Fill out the form below and our engineering team will respond shortly.
                </p>

                {submitted && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300">
                    <HiOutlineCheckCircle className="h-4 w-4 shrink-0" />
                    <span>Your message has been dispatched successfully.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Name */}
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
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Alex Rivera"
                          required
                          className="w-full rounded-lg border border-neutral-300 bg-transparent py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-600 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                        />
                      </div>
                    </div>

                    {/* Email */}
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
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          required
                          className="w-full rounded-lg border border-neutral-300 bg-transparent py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-600 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Cluster migration & Enterprise licensing"
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-600 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      Message
                    </label>
                    <div className="relative mt-1.5">
                      <div className="pointer-events-none absolute top-3 left-3 text-neutral-400">
                        <HiOutlineChatBubbleBottomCenterText className="h-4 w-4" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your requirements or issue..."
                        required
                        className="w-full rounded-lg border border-neutral-300 bg-transparent py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-600 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    <span>Send Message</span>
                    <HiOutlinePaperAirplane className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const PrivateContactPage = () => (
  <PrivateRoute>
    <ContactPage />
  </PrivateRoute>
);

export default PrivateContactPage;