import React from 'react';
import { DetailView } from '../views';
import { DetailViewContextProvider } from '../views/DetailView/DetailView.Context';
import { GetServerSideProps } from 'next';

interface ServerSideProps {
  userIP: string;
}

const Index: React.FC<ServerSideProps> = ({ userIP }) => (
  <DetailViewContextProvider initialIP={userIP}>
    <DetailView />
  </DetailViewContextProvider>
);

export const getServerSideProps: GetServerSideProps<ServerSideProps> =
  async ctx => {
    const userIP = String(ctx.req.headers['X-Forwarded-For'] || ''); // || process.env.NEXT_PUBLIC_DEFAULT_IP
    return {
      props: {
        userIP
      }
    };
  };

export default Index;
