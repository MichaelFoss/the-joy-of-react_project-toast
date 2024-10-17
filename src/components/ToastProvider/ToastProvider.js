import React, { createContext, useCallback, useState } from 'react';
import { useKeyDown } from '../../hooks/useKeyDown';

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  useKeyDown('Escape', () => {
    setToasts([]);
  });

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
