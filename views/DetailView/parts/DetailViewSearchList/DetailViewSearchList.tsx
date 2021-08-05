import React from 'react';
import QuestionMarkCircleIcon from '@heroicons/react/solid/QuestionMarkCircleIcon';
import { useDetailViewContext } from '../../DetailView.Context';

export const DetailViewSearchList = () => {
  const { changeSearchIP, searchList } = useDetailViewContext();

  return (
    <div className="min-h-16 max-h-36 overflow-auto py-2 text-gray-400  bg-white rounded shadow-lg">
      {!searchList.length && (
        <p className="text-center py-2">
          <QuestionMarkCircleIcon className="inline-block align-middle mr-2 w-8" />
          <span className="align-middle ">Latest search list is empty</span>
        </p>
      )}

      {searchList.map((ip, index) => (
        <div
          onClick={() => changeSearchIP(ip)}
          tabIndex={0}
          key={ip + index}
          className="cursor-pointer hover:bg-gray-200"
        >
          <p className="w-full inline-flex justify-between px-4 py-2">
            <span>{ip}</span>
            {/* <span>{detail.city} <span className='align-top text-xs'>{detail.country_name}</span></span> */}
          </p>
        </div>
      ))}
    </div>
  );
};
