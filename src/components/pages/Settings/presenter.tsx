import './styles.scss';

import React from 'react';

import { User } from '../../../context/Auth';
import PrimaryButton from '../../common/buttons/PrimaryButton';
import CommonFileInput from '../../common/fields/CommonFileInput';
import CommonInput from '../../common/fields/CommonInput';
import AppLayout from '../../common/layout/AppLayout';
import userImage from '../../common/MenuProfile/userImage.svg';
interface SettingsPresenterProps {
  user: User;
  onSubmit: (e: React.SyntheticEvent) => void;
}

const SettingsPresenter = (props: SettingsPresenterProps): JSX.Element => {
  const { user, onSubmit } = props;
  return (
    <AppLayout>
      <section className="user-setting">
        <h3 className="user-setting__title">Settings</h3>
        <div>
          <img
            className="user-setting__img"
            src={user.userImage || userImage}
            alt={user.userName}
          />
        </div>
        <form className="user-setting__form" onSubmit={onSubmit}>
          <CommonFileInput />
          <CommonInput
            className="user-setting__input"
            classNameLabel="user-setting__label"
            label="Username"
            name="userName"
            placeholder={user.userName}
          />
          <CommonInput
            className="user-setting__input"
            classNameLabel="user-setting__label"
            label="Your birthdate"
            name="birthdate"
            placeholder={user.birthdate}
          />
          <CommonInput
            className="user-setting__input"
            classNameLabel="user-setting__label"
            label="Email"
            name="email"
            placeholder={user.email}
          />
          <CommonInput
            className="user-setting__input"
            classNameLabel="user-setting__label"
            label="Password"
            name="password"
            placeholder={user.password}
            type="password"
          />
          <CommonInput
            className="user-setting__input"
            classNameLabel="user-setting__label"
            label="New password"
            name="newPassword"
            placeholder=""
            type="password"
          />
          <PrimaryButton type="submit" className="form__btn-submit">
            Save
          </PrimaryButton>
        </form>
      </section>
    </AppLayout>
  );
};

export default SettingsPresenter;
