import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

const ToastShelf = ({ toasts = [] }) => {
  if (!(toasts.length > 0)) {
    return null;
  }

  const handleClose = (toastIndex) => {
    onClose(toastIndex);
  };

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, toastIndex) => {
        const { variant, message, id } = toast;
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              variant={variant}
              message={message}
              onClose={() => handleClose(toastIndex)}
            />
          </li>
        );
      })}
    </ol>
  );
};

export default ToastShelf;
