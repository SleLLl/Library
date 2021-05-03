import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Book } from '../../../../domain/Book';
import SecondaryButton from '../../buttons/SecondaryButton';
import Stars from '../../fields/Stars';

interface CardShortProps extends Book {
  mode?: 'you' | 'waiting';
  removeFormMyLibrary: (id: string) => void;
}

const CardShort = (props: CardShortProps): JSX.Element => {
  const { id, name, imageUrl, stars, mode = 'waiting', removeFormMyLibrary } = props;
  return (
    <figure className="card-short">
      <Link to={`/book/${id}`}>
        <img className="card-short__img" src={imageUrl} alt={name} />
      </Link>
      <figcaption className="card-short__caption">
        <div>
          <p className="card-short__name">{name}</p>
        </div>
        <div className="card-short__star">
          <Stars count={stars} book />
        </div>
        <>
          {mode === 'waiting' ? (
            <Link to={`/book/${id}`}>
              <SecondaryButton className="card-short__btn card-short__btn_status">
                Check status
              </SecondaryButton>
            </Link>
          ) : (
            <SecondaryButton
              className="card-short__btn"
              onClick={() => removeFormMyLibrary(id)}>
              Return
            </SecondaryButton>
          )}
        </>
      </figcaption>
    </figure>
  );
};

export default CardShort;
