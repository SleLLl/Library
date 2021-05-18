import React, { useContext } from 'react';

import { AuthContext } from '../../../context/Auth';
import fileToBase64 from '../../../utils/fileToBase64';
import SettingsPresenter from './presenter';

const SettingsContainer = (): JSX.Element => {
  const { user, changePassword, changeSetting } = useContext(AuthContext);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const userInfo = Object.fromEntries(formData) as {
      userName?: string;
      birthdate?: string;
      email?: string;
      password?: string;
      newPassword?: string;
      file?: File;
      userImage?: string;
    };
    if (userInfo.password === userInfo.newPassword && userInfo.password) {
      changePassword(userInfo.password);
    }
    if (userInfo?.file && userInfo.file.size !== 0) {
      const base64 = await fileToBase64(userInfo?.file).catch(() => undefined);
      if (base64) {
        userInfo.userImage = base64 as string;
      }
      delete userInfo.file;
    }
    delete userInfo.file;
    delete userInfo.password;
    delete userInfo.newPassword;

    if (userInfo.userName === '') {
      delete userInfo.userName;
    }
    if (userInfo.birthdate === '') {
      delete userInfo.birthdate;
    }
    if (userInfo.email === '') {
      delete userInfo.email;
    }
    changeSetting({ ...userInfo });
  };

  return <SettingsPresenter user={user} onSubmit={onSubmit} />;
};

export default SettingsContainer;
