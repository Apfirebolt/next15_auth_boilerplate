'use client';

import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { logout, resetMessage } from '@/features/auth/authSlice';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      dispatch(resetMessage());
    }, 3000);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-accent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Next Auth</Link>
        </h1>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-4 absolute lg:static top-16 left-0 w-full lg:w-auto bg-primary lg:bg-transparent z-10 transition-all duration-300`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            <li>
              <Link
                href="/"
                className="hover:text-gray-400 hover:font-bold hover:text-lg block py-2 px-4 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-400 hover:font-bold hover:text-lg block py-2 px-4 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-400 hover:font-bold hover:text-lg block py-2 px-4 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            {isClient && user ? (
              <>
                <li className="text-white block py-2 px-4">Welcome, {user.email}</li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:text-gray-400 hover:font-bold hover:text-lg text-white block py-2 px-4 relative group"
                  >
                    Logout
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="hover:text-gray-400 hover:font-bold hover:text-lg block py-2 px-4 relative group"
                  >
                    Login
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="hover:text-gray-400 hover:font-bold hover:text-lg block py-2 px-4 relative group"
                  >
                    Register
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
