import React, { useContext, useMemo } from 'react';

import { BooksContext } from '../../../context/Books';
import YourOrdersPresenter from './presenter';

const YourOrdersContainer = (): JSX.Element => {
  const { removeFormMyLibrary, myBooks } = useContext(BooksContext);

  const mBook = useMemo(() => {
    return myBooks.filter((book) => !book.isTaken);
  }, [myBooks]);

  const waitingBooks = useMemo(() => {
    return myBooks.filter((book) => book.isTaken);
  }, [myBooks]);

  return (
    <YourOrdersPresenter
      myBooks={mBook}
      waitingBooks={waitingBooks}
      removeFormMyLibrary={removeFormMyLibrary}
    />
  );
};

export default YourOrdersContainer;
