import './styles.scss';

import classNames from 'classnames';
import React from 'react';

import { Book } from '../../../domain/Book';
import CardShort from '../../common/cards/CardShort';
import BookTitle from '../../common/titles/BookTitle';

interface YourOrdersPresenterProps {
  myBooks: Book[];
  waitingBooks: Book[];
  removeFormMyLibrary: (id: string) => void;
}

const YourOrdersPresenter = (props: YourOrdersPresenterProps): JSX.Element => {
  const { myBooks, removeFormMyLibrary, waitingBooks } = props;
  return (
    <div className="your-order__wrapper">
      <BookTitle title="Waiting for" />
      <div
        className={classNames(
          'your-order__grid',
          waitingBooks.length === 0 && 'empty_grid',
        )}>
        {waitingBooks.length === 0 ? (
          <h3 className="your-order__empty">Oops! You are not waiting for any book</h3>
        ) : (
          waitingBooks.map((book) => (
            <CardShort
              key={book.id}
              removeFormMyLibrary={removeFormMyLibrary}
              {...book}
            />
          ))
        )}
      </div>
      <BookTitle title="List of your books" />
      <div
        className={classNames(
          'your-order__grid',
          waitingBooks.length === 0 && 'empty_grid',
        )}>
        {myBooks.length === 0 ? (
          <h3 className="your-order__empty">Oops! You haven`t added any book yet</h3>
        ) : (
          myBooks.map((book) => (
            <CardShort
              key={book.id}
              mode="you"
              removeFormMyLibrary={removeFormMyLibrary}
              {...book}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default YourOrdersPresenter;
