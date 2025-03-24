import React, { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const LoginPage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                name="email"
                required
              />
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
                name="password"
                required
              />
            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded"
              type="submit"
            >
              Login
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
