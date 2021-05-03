import './styles.scss';

import React, { useEffect, useRef } from 'react';

interface PopUpProps {
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = (props) => {
  const popUpContent = useRef<HTMLDivElement>(null);

  const onClosePopUp = (e: MouseEvent) => {
    if (
      popUpContent.current &&
      !popUpContent.current.contains(e.target as HTMLDivElement)
    ) {
      props.onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('click', onClosePopUp);
    document.body.classList.add('open-popUp');
    return () => {
      document.body.classList.remove('open-popUp');
      window.removeEventListener('click', onClosePopUp);
    };
  }, []);

  return (
    <div className="popUp">
      <div ref={popUpContent} className="popUp__content">
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default PopUp;
