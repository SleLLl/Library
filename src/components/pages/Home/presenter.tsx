import './styles.scss';

import React from 'react';

import PrimaryButton from '../../common/buttons/PrimaryButton';
import SearchInput from '../../common/fields/SearchInput';
import Logo from '../../common/Logo';
import PopUp from '../../common/popUp';
import { ViewHomePage } from './container';
import FormLogIn from './form/FormLogIn';
import FormSingUp from './form/FormSingUp';

interface HomePagePresenterProps {
  view: ViewHomePage;
  changeView: (v: ViewHomePage) => () => void;
}

const HomePagePresenter = (props: HomePagePresenterProps): JSX.Element => {
  const { view, changeView } = props;

  return (
    <section className="home-page">
      <div className="container">
        <nav className="row home-page__row">
          <Logo />
          <SearchInput />
          <div className="row">
            <button onClick={changeView('logIn')} className="home-page__button">
              Log in
            </button>
            <button className="home-page__button" onClick={changeView('singUp')}>
              Sign up
            </button>
          </div>
        </nav>
        <div className="home-page__layout">
          <h2 className="home-page__title">BIld your library</h2>
          <h3 className="home-page__subTitle">
            Over 400.000 books from fiction to the business literature
          </h3>
          <PrimaryButton onClick={changeView('logIn')}>Let’s start</PrimaryButton>
        </div>
        {view === 'singUp' && (
          <PopUp onClose={changeView('content')}>
            <FormSingUp onClose={changeView('content')} />
          </PopUp>
        )}
        {view === 'logIn' && (
          <PopUp onClose={changeView('content')}>
            <FormLogIn onClose={changeView('content')} />
          </PopUp>
        )}
      </div>
    </section>
  );
};

export default HomePagePresenter;
