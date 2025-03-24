'use client'

import Image from "next/image";
import React, { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
      <Image
          className="dark:invert mt-10 mx-auto"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to our website! We are dedicated to providing the best
            service possible.
          </p>
          <p className="text-lg mb-4">
            Our team is composed of experienced professionals who are passionate
            about what they do.
          </p>
          <p className="text-lg">
            Thank you for visiting our site. We hope you find what you're
            looking for and enjoy your stay.
          </p>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;

