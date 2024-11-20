import { useState, useEffect } from 'react';

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    console.log(initialState);
    const storedValue = localStorage.getItem(key);
    console.log(storedValue);
    return !storedValue ? initialState : JSON.parse(storedValue);
  });

  useEffect(
    function () {
      if (!value) localStorage.setItem(key, JSON.stringify(initialState));
      else localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key, initialState]
  );

  return [value, setValue];
}
