import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
export default ({
  event = { time: "00:00:00" },
  open,
  handleClose,
  handleSave
}) => {
  if (!open) return null;

  const [state, handleChange, errors] = useForm(event, {
    name: [value => !!value || "Name is required"],
    date: [value => !!value || "Date is required"]
  });
  const [title, setTitle] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [dateValid, setDateValid] = useState(true);

  useEffect(() => {
    setTitle(`${event.id ? "Edit" : "Create"} event`);
  }, [event]);

  useEffect(() => {
    setCanSubmit(
      !Object.keys(errors).length && state.name && state.date && dateValid
    );
  }, [errors, state, dateValid]);

  useEffect(() => {
    try {
      if (!state.date || !state.time) return;
      const formDate = new Date(`${state.date} ${state.time || "00:00:00"}`);
      setDateValid(
        formDate.toISOString().localeCompare(new Date().toISOString()) > 0
      );
    } catch (error) {
      setDateValid(false);
    }
  }, [state.date, state.time]);

  const save = () => {
    if (!canSubmit) return;
    handleSave({ ...state, time: state.time || "00:00:00" });
  };

  const inputClassName = key => `input ${errors[key] ? "is-danger" : ""}`;

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={handleClose} />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <input
              type="text"
              className={inputClassName("name")}
              placeholder="Name"
              value={state.name || ""}
              onChange={handleChange}
              name="name"
              autoFocus
            />
            <p className="help is-danger">{errors.name}</p>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <input
                  type="date"
                  className={inputClassName("date")}
                  placeholder="Date"
                  value={state.date || ""}
                  onChange={handleChange}
                  name="date"
                />
                <p className="help is-danger">{errors.date}</p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <input
                  type="time"
                  className={inputClassName("time")}
                  placeholder="Time"
                  value={state.time || ""}
                  onChange={handleChange}
                  name="time"
                  step="1"
                />
              </div>
            </div>
          </div>
          {!dateValid && (
            <span className="help is-danger">
              Event date/time must be in the future
            </span>
          )}
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-success"
            disabled={!canSubmit}
            onClick={save}
          >
            Save changes
          </button>
          <button className="button" onClick={handleClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
