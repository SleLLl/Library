import React, { createContext, FC, useEffect } from 'react';
import { useQuery } from 'react-query';

import { BOOKS_KEY, LAST_CHANGE_KEY, MY_BOOKS_KEY } from '../constans';
import { Book } from '../domain/Book';
import getBooks from '../services/getBooks';
import checkChange from '../utils/checkChange';
import useLocalStorage from '../utils/useLocalStorage';

interface BooksContext {
  books: Book[];
  myBooks: Book[];
  addInMyLibrary: (id: string) => void;
  removeFormMyLibrary: (id: string) => void;
  searchInBooks: (str: string) => Book[];
}

export const BooksContext = createContext<BooksContext>({
  books: [],
  myBooks: [],
  addInMyLibrary: () => null,
  removeFormMyLibrary: () => null,
  searchInBooks: () => [],
});

const BooksContextProvider: FC = (props) => {
  const [books, setBooks] = useLocalStorage<Book[]>(BOOKS_KEY, []);
  const [myBooks, setMyBooks] = useLocalStorage<Book[]>(MY_BOOKS_KEY, []);
  const [lastChange, setLastChange] = useLocalStorage<Date>(LAST_CHANGE_KEY, new Date());

  const dataBook = useQuery('books', getBooks, {
    enabled: false,
    refetchOnWindowFocus: false,
    onSettled: (data) => {
      if (!books.length && data?.data) {
        setBooks(data.data);
      }
      if (!books.length && data?.data && checkChange(lastChange, 1)) {
        setLastChange(new Date());
        setBooks(data.data);
        setBooks([]);
        setMyBooks([]);
      }
    },
  });

  useEffect(() => {
    dataBook.refetch();
  }, []);

  const addInMyLibrary = (id: string) => {
    const book = books.find((book) => book.id === id);
    const myBook = myBooks.find((book) => book.id === id);
    if (book && !myBook) {
      setMyBooks((prevState) => {
        return [...prevState, book];
      });
      setBooks((prevState) => {
        return prevState.map((book) => {
          if (book.id === id) {
            return { ...book, isTaken: true };
          }
          return book;
        });
      });
    }
  };

  const removeFormMyLibrary = (id: string) => {
    setMyBooks((prevState) => {
      return prevState.filter((book) => book.id !== id);
    });
    setBooks((prevState) => {
      return prevState.map((book) => {
        if (book.id === id) {
          return { ...book, isTaken: false };
        }
        return book;
      });
    });
  };

  const isPrime = (str: string): Book[] => {
    const regStr = new RegExp(str.trim(), 'gi');
    return books.filter(
      (book) =>
        regStr.test(book.author) ||
        regStr.test(book.name) ||
        regStr.test(book.description),
    );
  };

  const searchInBooks = (str: string): Book[] => isPrime(str);

  return (
    <BooksContext.Provider
      value={{
        books,
        myBooks,
        addInMyLibrary,
        removeFormMyLibrary,
        searchInBooks,
      }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
