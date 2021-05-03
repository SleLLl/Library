import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../context/Auth';
import MenuProfilePresenter from './presenter';

const MenuProfileContainer = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const wrapper = React.createRef<HTMLDivElement>();
  const { user, logOut } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    show ? onShow() : onHide();
  });

  const addOutsideClickListener = () => {
    document.addEventListener('click', handleDocumentClick);
  };

  const removeOutsideClickListener = () => {
    document.removeEventListener('click', handleDocumentClick);
  };

  const handleDocumentClick = (e: any): void => {
    if (wrapper.current && e.target && !wrapper.current.contains(e.target)) {
      onClickOutside();
    }
  };

  const onShow = (): void => {
    addOutsideClickListener();
  };

  const onHide = (): void => {
    removeOutsideClickListener();
  };

  const onClickOutside = (): void => {
    setShow(false);
  };

  const showNav = (): void => {
    setShow((prevState) => !prevState);
  };

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
