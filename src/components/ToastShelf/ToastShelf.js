import React, { useContext } from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

const ToastShelf = () => {
  const { toasts, dismissToast } = useContext(ToastContext);
  if (!(toasts.length > 0)) {
    return null;
  }

  const handleClose = (id) => {
    dismissToast(id);
  };

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="notification"
    >
      {toasts.map((toast, toastIndex) => {
        const { variant, message, id } = toast;
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              variant={variant}
              message={message}
              onClose={() => handleClose(id)}
            />
          </li>
        );
      })}
    </ol>
  );
};

export default ToastShelf;
