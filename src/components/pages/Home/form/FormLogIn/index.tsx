import '../styles.scss';

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../../../context/Auth';
import CloseButton from '../../../../common/buttons/CloseButton';
import PrimaryButton from '../../../../common/buttons/PrimaryButton';
import CommonInput from '../../../../common/fields/CommonInput';
import { FormStep } from '../FormSingUp';

interface FormLogInProps {
  onClose: () => void;
}

const FormLogIn = (props: FormLogInProps): JSX.Element => {
  const [step, setStep] = useState<FormStep>('send');
  const { logIn } = useContext(AuthContext);
  const history = useHistory();

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const userInfo = Object.fromEntries(formData) as {
      userName: string;
      password: string;
    };
    const result = logIn(userInfo.userName, userInfo.password);
    if (result) {
      setStep('sending');
      history.push('/all-books');
    } else {
      setStep('error');
    }
  };

  return (
    <div>
      <div className="form__close">
        <CloseButton onClick={props.onClose} />
      </div>
      <h3 className="form__title">Log In to Fox Library</h3>
      <form onSubmit={onSubmit}>
        <CommonInput label="Username" name="userName" placeholder="Username" required />
        <CommonInput
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        {step === 'error' && <span className="error">Check login or password</span>}
        <PrimaryButton type="submit" className="form__btn-submit">
          Log In
        </PrimaryButton>
      </form>
    </div>
  );
};

export default FormLogIn;
