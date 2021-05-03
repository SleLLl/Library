import './styles.scss';

import React from 'react';

import { ALL_BOOKS_APP_ENDPOINT, YOUR_ORDERS_APP_ENDPOINT } from '../../constans';
import SearchInput from '../common/fields/SearchInput';
import HeaderLink from '../common/HeaderLink';
import Logo from '../common/Logo';
import MenuProfile from '../common/MenuProfile';

const Header = (): JSX.Element => (
  <header className="header">
    <div className="container">
      <nav className="row header__row">
        <Logo link="/all-books" />
        <SearchInput />
        <div className="header__profile-blc">
          <HeaderLink href={ALL_BOOKS_APP_ENDPOINT} label="All books" />
          <HeaderLink href={YOUR_ORDERS_APP_ENDPOINT} label="Your orders" />
          <MenuProfile />
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
