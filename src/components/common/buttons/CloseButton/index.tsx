import './styles.scss';

import classNames from 'classnames';
import React from 'react';

interface CloseButtonProps {
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = React.memo((props) => {
  const { type, className, disabled, onClick } = props;
  return (
    <button
      type={type}
      className={classNames('close-button', className)}
      disabled={disabled}
      onClick={onClick}>
      <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2.5805L14.3886 0.971375L8 7.3508L1.61143 0.971375L0 2.5805L6.38857 8.95992L0 15.3393L1.61143 16.9485L8 10.569L14.3886 16.9485L16 15.3393L9.61143 8.95992L16 2.5805Z"
          fill="#B5B5B5"
        />
      </svg>
    </button>
  );
});

CloseButton.displayName = 'PrimaryButton';

export default CloseButton;
