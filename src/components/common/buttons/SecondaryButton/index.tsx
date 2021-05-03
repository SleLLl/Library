import './styles.scss';

import classNames from 'classnames';
import React from 'react';

interface SecondaryButtonProps {
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = React.memo((props) => {
  const { type, className, disabled, onClick, children } = props;
  return (
    <button
      type={type}
      className={classNames('secondary-button', className)}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
});

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
