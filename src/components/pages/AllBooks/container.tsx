import React, { useContext, useState } from 'react';

import { BooksContext } from '../../../context/Books';
import AllBooksPresenter from './presenter';

const AllBooksContainer = (): JSX.Element => {
  const [count, setCount] = useState<number>(4);
  const [disabled, setDisabled] = useState<boolean>(false);
  const { books, addInMyLibrary } = useContext(BooksContext);

  const showMore = (): void => {
    if (books.length > count) {
      setCount((prevState) => prevState + 4);
    } else {
      setDisabled(true);
    }
  };

  return (
    <AllBooksPresenter
      addInMyLibrary={addInMyLibrary}
      books={books}
      count={count}
      showMore={showMore}
      disabled={disabled}
    />
  );
};

export default AllBooksContainer;
