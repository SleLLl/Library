import React, { useState } from 'react';

import HomePagePresenter from './presenter';

export type ViewHomePage = 'logIn' | 'singUp' | 'content';

const HomePageContainer = (): JSX.Element => {
  const [view, setView] = useState<ViewHomePage>('content');

  const changeView = (v: ViewHomePage) => () => setView(v);

  return <HomePagePresenter view={view} changeView={changeView} />;
};

export default HomePageContainer;
