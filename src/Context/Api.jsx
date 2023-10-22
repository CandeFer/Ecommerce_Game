/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { urlG } from '../componentes/url';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiUrl, setApiUrl] = useState(urlG);

  const updateApi = (url) => {
    setApiUrl(url);
  };

  useEffect(() => {
    console.log('Contexto actualizado:', apiUrl);
  }, [apiUrl]);

  return (
    <ApiContext.Provider value={{ apiUrl, updateApi }}>
      {children}
    </ApiContext.Provider>
  );
};
