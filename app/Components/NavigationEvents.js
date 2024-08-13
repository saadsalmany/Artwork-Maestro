'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents({ setIsLoading }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };
    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    handleRouteChangeStart();

    // Simulate a delay to show loading
    const timer = setTimeout(() => {
      handleRouteChangeComplete();
    }, 500); // Adjust this delay as needed

    return () => clearTimeout(timer);
  }, [pathname, searchParams, setIsLoading]);

  return null;
}