import './styles.scss';

import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { SETTINGS_APP_ENDPOINT, YOUR_ORDERS_APP_ENDPOINT } from '../../../constans';
import arrow from './arrow.svg';
import user from './userImage.svg';

interface MenuProfilePresenterProps {
  profileImg?: string;
  profileName?: string;
  view: boolean;
  changeShow: () => void;
  logOut: () => void;
}

const MenuProfilePresenter = React.forwardRef<HTMLDivElement, MenuProfilePresenterProps>(
  (props, ref): JSX.Element => {
    const { profileImg, profileName, view, changeShow, logOut } = props;
    return (
      <div className="menu-profile">
        <div
          role="button"
          className="menu-profile__user-blc"
          onClick={changeShow}
          aria-hidden="true">
          <img className="menu-profile__img" src={profileImg || user} alt={profileName} />
          <img className={`${view && 'arrow_active'}`} src={arrow} alt="arrow" />
        </div>
        <div
          role="button"
          aria-hidden="true"
          onClick={changeShow}
          className={classNames(view && 'close-wrapper')}
        />
        <div
          ref={ref}
          className={classNames('menu-profile__wrapper', view && 'menu-profile_active')}>
          <p className="menu-profile__user-name">
            {profileName && profileName?.length > 10
              ? `${profileName?.slice(0, 10)}...`
              : profileName}
          </p>
          <p className="menu-profile__common-link">
            <Link to={SETTINGS_APP_ENDPOINT}>Settings</Link>
          </p>
          <hr className="menu-profile__hr" />
          <p className="menu-profile__common-link">
            <Link to={YOUR_ORDERS_APP_ENDPOINT}>My orders</Link>
          </p>
          <button className="menu-profile__log-out" onClick={logOut}>
            Log out
          </button>
        </div>
      </div>
    );
  },
);

MenuProfilePresenter.displayName = 'MenuProfile';

export default MenuProfilePresenter;
