'use client';

import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { logout, resetMessage } from '@/features/auth/authSlice';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      dispatch(resetMessage());
    }, 3000)
  }

  useEffect(() => {
    setIsClient(true);
  }
  , []);

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link href="/">Next Auth</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
            {isClient && user ? (
              <>
                <li className="text-white">Welcome, {user.email}</li>
                <li>
                  <button onClick={handleLogout} className="text-white hover:text-gray-400">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="text-white hover:text-gray-400">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-white hover:text-gray-400">
                    Register
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
