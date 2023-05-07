"use client";

import { useEffect, useState } from "react";

function useDebounce(value: String) {
  const [debounce, setDebounce] = useState<String>(value);
  useEffect(() => {
    let timer = setTimeout(() => setDebounce(value), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debounce;
}

export default useDebounce;
