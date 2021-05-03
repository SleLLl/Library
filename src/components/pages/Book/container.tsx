import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BooksContext } from '../../../context/Books';
import { Book } from '../../../domain/Book';
import BookPagePresenter from './presenter';

interface Path {
  id: string | undefined;
}

const BookPageContainer = (): JSX.Element => {
  const { id } = useParams<Path>();
  const [book, setBook] = useState<Book>();

  const { books, addInMyLibrary, myBooks } = useContext(BooksContext);

  useEffect(() => {
    const result = books.find((item) => item.id === id);
    setBook(result);
  }, [id]);

  return (
    <BookPagePresenter book={book} myBooks={myBooks} addInMyLibrary={addInMyLibrary} />
  );
};

export default BookPageContainer;
