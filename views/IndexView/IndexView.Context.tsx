import React from 'react';

export interface IIndexViewContext {}

export const IndexViewContext = React.createContext<IIndexViewContext>(
  {} as IIndexViewContext
);

export const IndexViewContextProvider: React.FC = ({ children }) => {
  const context = {};
  return (
    <IndexViewContext.Provider value={context}>
      {children}
    </IndexViewContext.Provider>
  );
};
