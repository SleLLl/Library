import './styles.scss';

import classNames from 'classnames';
import React from 'react';

interface PrimaryButtonProps {
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = React.memo((props) => {
  const { type, className, disabled, onClick, children } = props;
  return (
    <button
      type={type}
      className={classNames('primary-button', className)}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
});

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
