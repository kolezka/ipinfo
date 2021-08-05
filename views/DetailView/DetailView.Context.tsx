import React from 'react';
import { useQuery } from 'react-query';
import { IDetails } from '../../shared/models/details/details.model';
import { getDetails } from '../../shared/services/ipstack.service';

export interface IDetailViewContext {
  ip: string;
  searchIP: string;
  changeSearchIP: (nextIP: string) => any;
  searchList: string[];
}

export const DetailViewContext = React.createContext<IDetailViewContext>(
  {} as IDetailViewContext
);

export const useDetailViewContext = () => React.useContext(DetailViewContext);

export interface IDetailViewContextProviderProps {
  userIP: string;
}

export const DetailViewContextProvider: React.FC<IDetailViewContextProviderProps> =
  ({ userIP, children }) => {
    const [searchIP, setSearchIP] = React.useState<string>('');

    const query = useQuery(['IP', userIP], () => getDetails(userIP));

    const [searchList, setSearchList] = React.useState<string[]>([]);

    const changeSearchIP = (nextIP: string) => {
      if (searchIP !== nextIP) {
        // Update state for caching list of searches
        if (query.data) {
          const nextSearchList = [nextIP, ...searchList];
          setSearchList(nextSearchList);
        }
        setSearchIP(nextIP);
      }
    };

    const context: IDetailViewContext = {
      ip: userIP,
      searchIP,
      searchList,
      changeSearchIP
    };

    return (
      <DetailViewContext.Provider value={context}>
        {children}
      </DetailViewContext.Provider>
    );
  };
