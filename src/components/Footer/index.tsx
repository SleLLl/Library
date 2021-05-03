import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { SETTINGS_APP_ENDPOINT, YOUR_ORDERS_APP_ENDPOINT } from '../../constans';
import facebook from './facebook.svg';
import insta from './instagramm.svg';

const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="container">
      <div className="row footer__row">
        <div className="footer__column-row">
          <div className="footer__row-ul">
            <div className="footer__ul-wrapper">
              <ul>
                <li className="footer__first-title">
                  <Link to="">About Fox Library</Link>
                </li>
                <li>
                  <Link to="">About us</Link>
                </li>
                <li>
                  <Link to="">Privacy&Security</Link>
                </li>
                <li>
                  <Link to="">Contact us</Link>
                </li>
              </ul>
            </div>

            <div className="footer__ul-wrapper">
              <ul>
                <li className="footer__first-title">
                  <Link to="">Help</Link>
                </li>
                <li>
                  <Link to="">Help center</Link>
                </li>
                <li>
                  <Link to="">FAQs</Link>
                </li>
              </ul>
            </div>

            <div className="footer__ul-wrapper">
              <ul>
                <li className="footer__first-title">
                  <Link to={SETTINGS_APP_ENDPOINT}>My account</Link>
                </li>
                <li>
                  <Link to={SETTINGS_APP_ENDPOINT}>Edit profile</Link>
                </li>
                <li>
                  <Link to={YOUR_ORDERS_APP_ENDPOINT}>My orders</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__column">
          <p className="footer__first-title">Stay connected</p>
          <div>
            <img className="footer__img" src={insta} alt="instagram" />
            <img className="footer__img" src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
