import './styles.scss';

import React from 'react';

import { Book } from '../../../domain/Book';
import PrimaryButton from '../../common/buttons/PrimaryButton';
import CardBook from '../../common/cards/CardBook';
import AppLayout from '../../common/layout/AppLayout';
import BookTitle from '../../common/titles/BookTitle';

interface AllBooksPresenterProps {
  books: Book[];
  count: number;
  showMore: () => void;
  disabled: boolean;
  addInMyLibrary: (id: string) => void;
}

const AllBooksPresenter = (props: AllBooksPresenterProps): JSX.Element | null => {
  const { books, count, showMore, disabled, addInMyLibrary } = props;
  return (
    <AppLayout>
      <BookTitle title="All books" />
      <div className="all-book__grid">
        {books.map((book, index) => {
          if (index < count) {
            return <CardBook key={book.id} {...book} addInMyLibrary={addInMyLibrary} />;
          }
          return null;
        })}
      </div>
      <div className="all-book__btn-blc">
        <PrimaryButton disabled={disabled} onClick={showMore}>
          Show more
        </PrimaryButton>
      </div>
    </AppLayout>
  );
};

export default AllBooksPresenter;
