import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext(undefined);

export const LoadingProviders = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const setLoading = (loading) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
