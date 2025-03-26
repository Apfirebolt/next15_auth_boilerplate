import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
return (
    <footer className="bg-primary text-accent py-8 border-t border-gray-300">
        <div className="container mx-auto text-center px-4">
            <div className="mb-4">
                <h2 className="text-lg font-bold">Subscribe to our Newsletter</h2>
                <p className="text-sm">
                    Stay updated with the latest news and updates.
                </p>
                <form className="mt-4 flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-secondary text-white rounded-r-md hover:bg-accent-dark"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="text-accent hover:text-accent-dark text-2xl">
                    <FaFacebook />
                </a>
                <a href="#" className="text-accent hover:text-accent-dark text-2xl">
                    <FaTwitter />
                </a>
                <a href="#" className="text-accent hover:text-accent-dark text-2xl">
                    <FaInstagram />
                </a>
                <a href="#" className="text-accent hover:text-accent-dark text-2xl">
                    <FaLinkedin />
                </a>
            </div>
            <p className="mt-6 pt-4 border-t">
                &copy; {new Date().getFullYear()} Next Auth. All rights reserved.
            </p>
        </div>
    </footer>
);
};

export default Footer;
