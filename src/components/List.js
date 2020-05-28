import React, { useState, useEffect } from "react";
import Event from "./Event";

export default ({ events, handleDelete, search = "" }) => {
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    setFilteredList(
      events.filter(
        event =>
          !search || event.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [events, search]);
  return (
    <div className="columns is-mobile">
      {filteredList.map(event => (
        <div
          className="column is-12-mobile is-6-tablet is-4-desktop"
          key={event.name}
        >
          <Event event={event} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};
