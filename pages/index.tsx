import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { getDetails } from '../shared/services/ipstack.service';
import { DetailView } from '../views';
import { DetailViewContextProvider } from '../views/DetailView/DetailView.Context';

interface ServerSideProps {
  userIP: string;
}

const Index: React.FC<ServerSideProps> = ({ userIP }) => (
  <>
    <Head>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
    </Head>
    <DetailViewContextProvider userIP={userIP}>
      <DetailView />
    </DetailViewContextProvider>
  </>
);

export const getServerSideProps: GetServerSideProps<ServerSideProps> =
  async ctx => {
    const queryClient = new QueryClient();
    const userIP = String(ctx.req.headers['x-forwarded-for'] || '83.25.1.1'); // || process.env.NEXT_PUBLIC_DEFAULT_IP
    await queryClient.prefetchQuery(['IP', userIP], () => getDetails(userIP));
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        userIP
      }
    };
  };

export default Index;
