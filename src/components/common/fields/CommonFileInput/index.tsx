import './styles.scss';

import React, { useRef, useState } from 'react';

import SecondaryButton from '../../buttons/SecondaryButton';

type File = 'error' | 'empty' | 'ok';

const CommonFileInput = (): JSX.Element => {
  const [state, setState] = useState<File>('empty');
  const refInput = useRef<HTMLInputElement>(null);

  const onChange = (files: FileList) => {
    if (files.length === 0) {
      setState('empty');
      return;
    }
    if (files[0].size > 30_000_000) {
      setState('error');
      if (refInput.current) {
        refInput.current.value = '';
      }
      return;
    }
    setState('ok');
  };

  const upload = () => refInput.current?.click();

  return (
    <div className="common-file-input">
      <SecondaryButton
        type="button"
        className="user-setting__change_photo"
        onClick={upload}>
        Change photo
      </SecondaryButton>
      {state === 'error' && (
        <span className="common-file-input__error">Файл слишком большой</span>
      )}
      <input
        className="common-file-input__hide"
        ref={refInput}
        onChange={(e) => e.target.files && onChange(e.target.files)}
        type="file"
        name="file"
        accept="image/*"
      />
    </div>
  );
};

export default CommonFileInput;
