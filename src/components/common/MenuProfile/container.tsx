import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../context/Auth';
import MenuProfilePresenter from './presenter';

const MenuProfileContainer = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const wrapper = React.createRef<HTMLDivElement>();
  const { user, logOut } = useContext(AuthContext);
  const history = useHistory();

  const showNav = (): void => setShow((prevState) => !prevState);

  const logOutUSer = (): void => {
    logOut();
    history.push('/');
  };

  return (
    <MenuProfilePresenter
      profileName={user.userName}
      view={show}
      changeShow={showNav}
      ref={wrapper}
      logOut={logOutUSer}
      profileImg={user.userImage}
    />
  );
};

export default MenuProfileContainer;
