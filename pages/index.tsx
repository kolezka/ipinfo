// import { IndexView } from "../views"
// import { IndexViewContextProvider } from "../views/IndexView/IndexView.Context"

import { GetServerSideProps } from 'next';

// const Index = () => (
//   <IndexViewContextProvider>
//     <IndexView />
//   </IndexViewContextProvider>
// )

// export default Index;

const Index = () => null;

export const getServerSideProps: GetServerSideProps = async ctx => {
  return {
    props: {}
  };
};

export default Index;
