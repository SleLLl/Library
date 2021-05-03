import './styles.scss';

import React from 'react';

const Spinner = (): JSX.Element => (
  <div className="loader__wrapper">
    <div className="loader">Loading...</div>
  </div>
);

export default Spinner;
