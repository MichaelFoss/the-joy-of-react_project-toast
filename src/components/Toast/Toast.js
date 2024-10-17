import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const Toast = ({ variant, message, onClose }) => {
  const Component = ICONS_BY_VARIANT[variant];
  if (!Component) {
    const acceptedVariants = Object.keys(ICONS_BY_VARIANT);
    throw new RangeError(
      `${variant} is not accepted variant type of [${acceptedVariants.join(
        ', '
      )}].`
    );
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`${styles.toast} ${styles[variant] || ''}`}>
      <div className={styles.iconContainer}>
        <Component size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={handleClose}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
};

export default Toast;
