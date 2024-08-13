'use client';

import React, { useEffect } from 'react';
import { bouncy } from 'ldrs';
import { useLoading } from './LoadingProvider';

const LoadingOverlay = () => {
  const { isLoading } = useLoading();

  useEffect(() => {
    bouncy.register();
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <l-bouncy
        size="45"
        speed="1.75"
        color="black"
      ></l-bouncy>
    </div>
  );
};

export default LoadingOverlay;