import { Dispatch, SetStateAction, useState } from 'react';

import handleError from './handleError';

function useLocalStorage<T>(
  key: string,
  initialState: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      handleError(error);
      return initialState;
    }
  });

  const setValue = (value: T | ((prevState: T) => T)): void => {
    try {
      const item = window.localStorage.getItem(key);
      const valueToStore =
        value instanceof Function ? value(item ? JSON.parse(item) : initialState) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      handleError(error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
