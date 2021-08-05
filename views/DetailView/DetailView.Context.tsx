import React from 'react';

export interface IDetailViewContext {
  ip: string;
  setIP: (str: string) => any;
}

export const DetailViewContext = React.createContext<IDetailViewContext>(
  {} as IDetailViewContext
);

export const useDetailViewContext = () => React.useContext(DetailViewContext);

export interface IDetailViewContextProviderProps {
  initialIP?: string;
}

export const DetailViewContextProvider: React.FC<IDetailViewContextProviderProps> =
  ({ initialIP, children }) => {
    const [ip, setIP] = React.useState<string>(initialIP || '');

    const context: IDetailViewContext = {
      ip,
      setIP: str => setIP(str)
    };

    return (
      <DetailViewContext.Provider value={context}>
        {children}
      </DetailViewContext.Provider>
    );
  };
