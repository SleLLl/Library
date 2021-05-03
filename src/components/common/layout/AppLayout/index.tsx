import './styles.scss';

import React, { FC } from 'react';

import Footer from '../../../Footer';
import Header from '../../../Header';

const AppLayout: FC = ({ children }) => (
  <section className="app">
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </section>
);

export default AppLayout;
