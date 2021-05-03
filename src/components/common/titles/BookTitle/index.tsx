import './styles.scss';

import React from 'react';

const BookTitle = (props: { title: string }): JSX.Element => (
  <h2 className="book-title">{props.title}</h2>
);

export default BookTitle;
