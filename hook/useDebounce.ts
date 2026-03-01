import { useEffect, useState } from "react";

// function debounce for delay
export const useDebounce = (val: string, delay = 300 as number): string => {
  const [debounce, setDebounce] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(val);
    }, delay);

    return () => clearTimeout(handler);
  }, [val, delay]);

  return debounce as string;
};
