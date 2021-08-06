import React from 'react';
import { useQuery } from 'react-query';
import { getDetails } from '../../shared/services/ipstack.service';
import { DetailsCard } from '../../shared/components/DetailsCard/DetailsCard';
import { useDetailViewContext } from './DetailView.Context';
import { DetailViewSearchBar } from './parts/DetailViewSearchBar/DetailViewSearchBar';
import { DetailViewSearchList } from './parts/DetailViewSearchList/DetailViewSearchList';
import { ToastContainer } from 'react-toastify';
import { IDetails } from '../../shared/models/details/details.model';

export const DetailView = () => {
  const { ip, searchIP } = useDetailViewContext();

  const query = useQuery(['IP', ip], () => getDetails(ip));

  const searchQuery = useQuery(
    ['IP', 'search', searchIP],
    () => getDetails(searchIP),
    {
      enabled: !!searchIP
    }
  );

  return (
    <div className="container px-4">
      <div className="flex flex-col w-full min-h-screen">
        <div className="my-auto py-4">
          <div className="grid gap-4 lg:gap-8 md:grid-cols-2">
            <DetailsCard
              title={`Current IP ${ip}`}
              details={query.data as IDetails}
              fetching={query.isFetching}
            />
            <DetailsCard
              title={`Search IP ${searchIP}`}
              details={searchQuery.data as IDetails}
              fetching={searchQuery.isFetching || !searchIP}
            />
            <div className="md:col-span-2">
              <DetailViewSearchList />
            </div>
          </div>
        </div>

        <DetailViewSearchBar />
        <ToastContainer />
      </div>
    </div>
  );
};
