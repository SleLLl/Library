import { useEffect, useState } from 'react';

const useDebounce = (input: string, delay: number): string => {
  const [value, setValue] = useState(input);

  useEffect(() => {
    const prevInput = setTimeout(() => {
      setValue(input);
    }, delay);

    return () => clearTimeout(prevInput);
  }, [input, delay]);

  return value;
};

export default useDebounce;
