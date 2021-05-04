import React, { useContext, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ALL_BOOKS_APP_ENDPOINT } from '../../../../constans';
import { BooksContext } from '../../../../context/Books';
import useDebounce from '../../../../utils/useDebounce';
import SearchInputPresenter from './presenter';

const SearchInputContainer = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const { searchInBooks } = useContext(BooksContext);
  const searchValue = useDebounce(value, 600);
  const location = useLocation();
  const history = useHistory();

  const result = useMemo(() => {
    return searchValue === '' ? [] : searchInBooks(searchValue);
  }, [searchValue]);

  const clickMore = () => {
    if (location.pathname === ALL_BOOKS_APP_ENDPOINT) {
      setValue(() => '');
    } else {
      history.push(ALL_BOOKS_APP_ENDPOINT);
    }
  };

  const clickLink = (id: string) => () => {
    setValue(() => '');
    history.push(`/book/${id}`);
  };

  return (
    <SearchInputPresenter
      clickMore={clickMore}
      value={value}
      onChange={setValue}
      result={result}
      clickLink={clickLink}
    />
  );
};

export default SearchInputContainer;
