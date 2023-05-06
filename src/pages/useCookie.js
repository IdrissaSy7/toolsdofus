import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function useCookie(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = Cookies.get(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      Cookies.set(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
