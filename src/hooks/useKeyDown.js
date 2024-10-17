import { useEffect } from 'react';

export const useKeyDown = (keyCode, callback) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === keyCode) {
        callback();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return {
    callback,
  };
};
