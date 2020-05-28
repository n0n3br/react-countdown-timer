import React, { useEffect, useState } from "react";
import Remaining from "./Remaining";
import addNotification from "../utils/notification";

export default ({ event, handleDelete }) => {
  const [dueDate, setDueDate] = useState(new Date().toLocaleString());
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [display, setDisplay] = useState("Remaining");
  useEffect(() => {
    if (!event.date || !event.time) return;
    const date = new Date(`${event.date} ${event.time}`);
    setDueDate(date.toLocaleString());
    if (date < new Date()) return;
    const interval = setInterval(() => {
      let distance = date.getTime() - new Date().getTime();
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setRemaining({
        days,
        hours,
        minutes,
        seconds
      });
      if (days + hours + minutes + seconds === 0) {
        addNotification("Countdown Timer", `Event ${event.name} is starting`);
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, 1000);
  }, [event]);

  const changeDisplay = () => {
    setDisplay(display === "Remaining" ? "Due Date" : "Remaining");
  };

  const svgStyle = {
    widht: "24px",
    height: "24px",
    cursor: "pointer"
  };
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">{event.name}</p>
        <span className="card-header-icon">
          <span className="delete" data-id={event.id} onClick={handleDelete} />
        </span>
      </div>
      <div className="card-content">
        <div className="columns is-mobile">
          <div
            className="column is-narrow has-text-grey-light"
            onClick={changeDisplay}
          >
            <svg viewBox="0 0 24 24" style={svgStyle}>
              <path
                fill="currentColor"
                d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
              />
            </svg>
          </div>
          <div className="column has-text-centered has-text-grey-light">
            {display}
          </div>
          <div
            className="column is-narrow  has-text-grey-light"
            onClick={changeDisplay}
          >
            <svg style={svgStyle} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </div>
        </div>
        {display === "Remaining" && <Remaining remaining={remaining} />}
        {display === "Due Date" && (
          <p className="has-text-centered is-size-2">{dueDate}</p>
        )}
      </div>
    </div>
  );
};
