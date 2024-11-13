import { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState();
  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

export const useLoaderContext = () => {
  const context = useContext(LoaderContext);
  if (context === 'undefined')
    throw new Error('PostContext was use outside the PostProvider');
  return context;
};

export default LoaderProvider;
