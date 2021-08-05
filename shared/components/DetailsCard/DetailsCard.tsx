import React from 'react';
import dynamic from 'next/dynamic';
import { IDetailsCardMapProps } from './DetailsCardMap';
import { IDetails } from '../../models/details/details.model';
import Skeleton from 'react-loading-skeleton';
// Icons
import GlobeIcon from '@heroicons/react/outline/GlobeIcon';
import DesktopComputerIcon from '@heroicons/react/outline/DesktopComputerIcon';
import clsx from 'clsx';

export interface IDetailsCardProps {
  title?: string;
  details?: IDetails;
  fetching?: boolean;
}

const DetailsCardMap = dynamic<IDetailsCardMapProps>(
  () => import('./DetailsCardMap').then(m => m.DetailsCardMap),
  {
    ssr: false,
    loading: () => <div className="h-80 bg-gray-300" />
  }
);

export const DetailsCard: React.FC<IDetailsCardProps> = ({
  title,
  details,
  fetching
}) => {
  return (
    <div
      className={clsx(
        'transition-opacity p-4 bg-white rounded shadow-lg overflow-hidden',
        {
          'opacity-30': fetching
        }
      )}
    >
      <div className="flex w-full justify-between">
        {title && <h6 className="text-lg font-semibold mb-2">{title}</h6>}
        <span className="text-lg">
          {details?.location?.is_eu && '🇪🇺'}
          {details?.location?.country_flag_emoji}
        </span>
      </div>

      <DetailsCardMap details={details} />

      <div className="divide-y m-4">
        <div className="py-4">
          <DesktopComputerIcon className="inline-block mr-4 w-6 align-middle" />

          {details ? (
            <span className="align-middle">{details?.ip}</span>
          ) : (
            <div className="inline-block w-32">
              <Skeleton />
            </div>
          )}
        </div>
        <div className="py-4">
          <GlobeIcon className="inline-block mr-4 w-6 align-middle" />

          {details ? (
            <span className="align-middle">
              {details?.city}
              <span className="align-top text-xs text-gray-400">
                {' '}
                {details?.country_name}, {details?.continent_name}
              </span>
            </span>
          ) : (
            <div className="inline-block w-32">
              <Skeleton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
