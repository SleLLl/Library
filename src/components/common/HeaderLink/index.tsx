import './styles.scss';

import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderLinkProps {
  href: string;
  label: string;
}

const HeaderLink = (props: HeaderLinkProps): JSX.Element => {
  const location = useLocation();
  return (
    <span
      className={classNames(
        'header__link',
        location.pathname === props.href && 'header__link_active',
      )}>
      <Link to={props.href}>{props.label}</Link>
    </span>
  );
};

export default HeaderLink;
