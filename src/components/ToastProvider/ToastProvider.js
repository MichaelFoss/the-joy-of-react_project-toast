import React, { createContext, useCallback, useEffect, useState } from 'react';

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'Escape') {
        setToasts([]);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const addToast = useCallback(
    ({ message, variant }) => {
      setToasts([
        ...toasts,
        {
          id: crypto.randomUUID(),
          message,
          variant,
        },
      ]);
    },
    [toasts, setToasts]
  );

  const dismissToast = useCallback(
    (id) => {
      const newToasts = [...toasts].filter((toast) => toast.id !== id);
      setToasts(newToasts);
    },
    [toasts, setToasts]
  );

  const value = {
    toasts,
    addToast,
    dismissToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export default ToastProvider;
