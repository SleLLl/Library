import '../styles.scss';

import React, { useContext, useState } from 'react';

import { AuthContext } from '../../../../../context/Auth';
import CloseButton from '../../../../common/buttons/CloseButton';
import PrimaryButton from '../../../../common/buttons/PrimaryButton';
import CommonInput from '../../../../common/fields/CommonInput';

interface FormSingUpProps {
  onClose: () => void;
}

export type FormStep = 'send' | 'error' | 'sending';

const FormSingUp = (props: FormSingUpProps): JSX.Element => {
  const [step, setStep] = useState<FormStep>('send');
  const { createUser } = useContext(AuthContext);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const userInfo = Object.fromEntries(formData) as {
      userName: string;
      birthdate: string;
      email: string;
      password: string;
    };
    createUser({ ...userInfo, userImage: '', auth: false });
    setStep('sending');
    setTimeout(() => props.onClose(), 2000);
  };

  return (
    <div>
      <div className="form__close">
        <CloseButton onClick={props.onClose} />
      </div>
      {step !== 'sending' && (
        <>
          <h3 className="form__title">Welcome to Fox Library</h3>
          <form onSubmit={onSubmit}>
            <CommonInput
              label="Username"
              name="userName"
              placeholder="Username"
              required
            />
            <CommonInput
              label="Your birthdate"
              name="birthdate"
              placeholder="Your birthdate"
              required
            />
            <CommonInput label="Email" name="email" placeholder="Email" required />
            <CommonInput
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
              required
            />
            {step === 'error' && <span className="error">Error</span>}
            <PrimaryButton type="submit" className="form__btn-submit">
              Sign up
            </PrimaryButton>
          </form>
        </>
      )}
      {step === 'sending' && <h3>Thanks for registration</h3>}
    </div>
  );
};

export default FormSingUp;
