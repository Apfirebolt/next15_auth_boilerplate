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
        <section className="relative bg-gray-800 text-white">
        {/* <Image
          className="dark:invert mt-10 mx-auto"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
          <img
            src="https://c4.wallpaperflare.com/wallpaper/368/671/716/death-note-l-lawliet-anime-wallpaper-preview.jpg"
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative container mx-auto p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-5xl font-extrabold mb-4">Home</h1>
            <p className="text-xl mb-4 max-w-2xl">
              Welcome to our website! We are dedicated to providing the best
              service possible.
            </p>
            <p className="text-lg max-w-2xl">
              It is just a simple Next.js app with Tailwind CSS and Redux Toolkit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
