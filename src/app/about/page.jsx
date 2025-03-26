import React, { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const AboutPage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <section className="relative bg-gray-800 text-white">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/368/671/716/death-note-l-lawliet-anime-wallpaper-preview.jpg"
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative container mx-auto p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
            <p className="text-xl mb-4 max-w-2xl">
              Welcome to our website! We are dedicated to providing the best
              service possible.
            </p>
            <p className="text-lg max-w-2xl">
              Our team is composed of experienced professionals who are
              passionate about what they do. Thank you for visiting our site. We
              hope you find what you're looking for and enjoy your stay.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
