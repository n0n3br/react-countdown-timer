import React from "react";

export default ({ value, handleChange, handleClick }) => {
  return (
    <div className="columns is-mobile">
      <div className="column">
        <input
          type="text"
          name="search"
          value={value.search}
          onChange={handleChange}
          className="input"
          placeholder="Search"
        />
      </div>
      <div className="column is-narrow">
        <button className="button" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};
