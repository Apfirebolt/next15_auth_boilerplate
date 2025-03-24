'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Mark as hydrated on the client side.
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!isHydrated) {
    return null; // Or a loading indicator
  }

  if (!user) {
      return null;
  }

  return children;
};

export default PrivateRoute;