import { useEffect, useState } from "react";

export default (key, initialState = null) => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      return initialState;
    }
  });

  const set = value => {
    if (!value) return;
    setState(JSON.parse(JSON.stringify(value)));
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, set];
};
