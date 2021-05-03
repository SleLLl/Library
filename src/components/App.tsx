import '../theme/global.scss';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import AuthContextProvider from '../context/Auth';
import BooksContextProvider from '../context/Books';
import ApplicationRouter from '../router';

const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <AuthContextProvider>
      <BooksContextProvider>
        <ApplicationRouter />
      </BooksContextProvider>
    </AuthContextProvider>
  </QueryClientProvider>
);

export default App;
