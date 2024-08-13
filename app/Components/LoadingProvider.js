'use client';

import React, { createContext, useContext, useState } from 'react';
import { NavigationEvents } from './NavigationEvents';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <NavigationEvents setIsLoading={setIsLoading} />
      {children}
    </LoadingContext.Provider>
  );
};