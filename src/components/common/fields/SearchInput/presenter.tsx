import './styles.scss';

import React, { ChangeEventHandler } from 'react';

import { Book } from '../../../../domain/Book';
import magnifier from './magnifier.svg';

interface SearchInputPresenterProps {
  value?: string;
  onChange?: (v: string) => void;
  result: Book[];
  clickMore: () => void;
  clickLink: (id: string) => () => void;
}

const SearchInputPresenter = (props: SearchInputPresenterProps): JSX.Element => {
  const { onChange, result, value, clickMore, clickLink } = props;
  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="search">
      <div className="search-wrapper">
        <label className="search__label">
          <img src={magnifier} alt="magnifier" />
          <input
            className="search__input"
            type="text"
            aria-label="Search"
            placeholder="Search by author, title, name"
            autoComplete="off"
            onChange={onChangeValue}
          />
        </label>
        {value !== '' && result.length !== 0 && (
          <div className="search__result">
            <ul>
              {result.slice(0, 5).map((book) => (
                <li key={book.id} className="search__result-li">
                  <button onClick={clickLink(book.id)}>
                    <img src={book.imageUrl ?? undefined} alt={book.name} />
                    <span>{book.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            {result.length > 5 ? (
              <li key="more" className="search__result-more">
                <button onClick={clickMore}>{`Показать все (${result.length})`}</button>
              </li>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInputPresenter;
