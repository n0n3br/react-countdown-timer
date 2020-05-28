import React from "react";

export default ({ remaining }) => {
  return (
    <div className="columns is-mobile is-multiline is-multiline-mobile">
      <div className="column is-6-mobile is-3-tablet">
        <p className="has-text-centered is-size-2">
          {remaining.days.toLocaleString()}
        </p>
        <p className="has-text-centered is-size-6 has-text-grey-light is-uppercase">
          DAYS
        </p>
      </div>
      <div className="column is-6-mobile is-3-tablet">
        <p className="has-text-centered is-size-2">
          {remaining.hours.toLocaleString()}
        </p>
        <p className="has-text-centered is-size-6 has-text-grey-light is-uppercase">
          hours
        </p>
      </div>
      <div className="column is-6-mobile is-3-tablet">
        <p className="has-text-centered is-size-2">
          {remaining.minutes.toLocaleString()}
        </p>
        <p className="has-text-centered is-size-6 has-text-grey-light is-uppercase">
          minutes
        </p>
      </div>
      <div className="column is-6-mobile is-3-tablet">
        <p className="has-text-centered is-size-2">
          {remaining.seconds.toLocaleString()}
        </p>
        <p className="has-text-centered is-size-6 has-text-grey-light is-uppercase">
          seconds
        </p>
      </div>
    </div>
  );
};
