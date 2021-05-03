import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Book } from '../../../../domain/Book';
import SecondaryButton from '../../buttons/SecondaryButton';
import Stars from '../../fields/Stars';

interface CardBookProps extends Book {
  addInMyLibrary: (id: string) => void;
}

const CardBook = (props: CardBookProps): JSX.Element => {
  const { id, name, imageUrl, stars, author, isTaken, addInMyLibrary } = props;
  return (
    <figure className="card-book">
      <Link to={`/book/${id}`}>
        <img className="card-book__img" src={imageUrl} alt={name} />
      </Link>
      <figcaption className="card-book__right-side">
        {isTaken ? (
          <div className="card-book__taken">Taken</div>
        ) : (
          <div className="card-book__available">Available</div>
        )}
        <div>
          <p className="card-book__name">{name}</p>
        </div>
        <p className="card-book__author">by {author}</p>
        <div className="card-book__star">
          <Stars book count={stars} />
        </div>
        <SecondaryButton
          onClick={() => addInMyLibrary(id)}
          className="card-book__btn-order">
          Order
        </SecondaryButton>
      </figcaption>
    </figure>
  );
};

export default CardBook;
