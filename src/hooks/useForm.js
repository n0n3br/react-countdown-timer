import { useState, useCallback } from "react";

export default (initialState = {}, validation = {}) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleErrors = useCallback(
    newState => {
      setErrors(
        Object.keys(newState).reduce((memo, key) => {
          const rules = validation[key];
          const value = newState[key];
          if (!validation[key]) return memo;
          const rulesValue = rules.reduce((rulesMemo, rule) => {
            const ruleValue = rule(value);
            if (ruleValue !== true)
              rulesMemo = [...(rulesMemo || []), ruleValue];
            return rulesMemo;
          }, false);
          if (rulesValue) memo[key] = rulesValue;
          return memo;
        }, {})
      );
    },
    [validation]
  );

  const handleChange = useCallback(
    event => {
      const newState = { ...state, [event.target.name]: event.target.value };
      setState(newState);
      handleErrors(newState);
    },
    [state, handleErrors]
  );

  return [state, handleChange, errors];
};
