import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import uid from "../utils/uid";
export default () => {
  const [storage, setStorage] = useLocalStorage("events");
  const [state, setState] = useState(storage || []);

  const save = newState => {
    setState(newState);
    setStorage(newState);
  };

  return [
    state,
    {
      create: event => save([...state, { id: uid(), ...event }]),
      update: event =>
        save([...state.map(s => (s.id !== event.id ? s : event))]),
      delete: event => save(state.filter(s => s.id !== event.id))
    }
  ];
};
