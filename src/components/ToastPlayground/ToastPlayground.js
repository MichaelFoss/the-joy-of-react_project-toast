import React, { useState } from 'react';

import Toast from '../Toast';
import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const ToastPlayground = () => {
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleVariantChange = (e) => {
    setVariant(e.target.value);
  };

  const handlePopToast = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isOpen && (
        <Toast variant={variant} message={message} onClose={handleOnClose} />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantOption) => (
              <label htmlFor={`variant-${variantOption}`} key={variantOption}>
                <input
                  id={`variant-${variantOption}`}
                  type="radio"
                  name="variant"
                  value={variantOption}
                  onChange={handleVariantChange}
                  checked={variantOption === variant}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handlePopToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastPlayground;
