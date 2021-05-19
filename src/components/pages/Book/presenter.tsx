import './styles.scss';

import React from 'react';

import { Book } from '../../../domain/Book';
import { renderParsedWysiwyg } from '../../../utils/renderParsedWysiwyg';
import SecondaryButton from '../../common/buttons/SecondaryButton';
import Stars from '../../common/fields/Stars';

interface BookPagePresenterProps {
  book?: Book;
  addInMyLibrary: (id: string) => void;
  myBooks: Book[];
}

const BookPagePresenter = (props: BookPagePresenterProps): JSX.Element => {
  const { book, addInMyLibrary, myBooks } = props;
  return (
    <section className="book">
      <div className="book__grid">
        <img className="book__img" src={book?.imageUrl} alt={book?.name} />
        <div>
          <div className="book__stars">
            <Stars count={book?.stars} book={false} />
          </div>
          <h1 className="book__name">{book?.name}</h1>
          <p className="book__author">{book?.author}</p>
          <p className="book__length">
            {book?.length}, {book?.released}
          </p>
          <SecondaryButton
            onClick={book?.id ? () => addInMyLibrary(book?.id) : undefined}
            disabled={Boolean(myBooks?.find((item) => item.id === book?.id))}
            className="book__btn-blc">
            Order
          </SecondaryButton>
          <p className="book__about">About book</p>
          <div className="book__about-book">{renderParsedWysiwyg(book?.description)}</div>
        </div>
      </div>
    </section>
  );
};

export default BookPagePresenter;
