import './styles.scss';

import classNames from 'classnames';
import React, { ChangeEvent, CSSProperties } from 'react';

interface CommonInputProps {
  placeholder?: string;
  type?: string;
  label: string;
  style?: CSSProperties;
  disabled?: boolean;
  name: string;
  className?: string;
  classNameLabel?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput = (props: CommonInputProps): JSX.Element => {
  const {
    placeholder,
    required,
    type,
    style,
    disabled,
    name,
    className,
    onChange,
    label,
    classNameLabel,
    ...rest
  } = props;

  return (
    <label className={classNames('common-label', classNameLabel)}>
      {label}
      <input
        placeholder={placeholder}
        type={type}
        style={style}
        disabled={disabled}
        name={name}
        required={required}
        onChange={onChange}
        className={classNames('common-input', className)}
        {...rest}
      />
    </label>
  );
};

export default CommonInput;
