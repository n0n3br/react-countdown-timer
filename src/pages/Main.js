import React, { useState } from "react";
import Toolbar from "../components/Toolbar";
import Modal from "../components/Modal";
import List from "../components/List";
import useForm from "../hooks/useForm";
import useEvents from "../hooks/useEvents";

export default () => {
  const [formValue, handleFormChange] = useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const [events, eventsActions] = useEvents();
  const toggleModal = () => setModalOpen(!modalOpen);
  const handleAddEvent = event => {
    toggleModal();
    eventsActions.create(event);
  };
  const handleDeleteEvent = event => {
    const id = event.target.dataset.id;
    eventsActions.delete(events.find(e => e.id === id));
  };

  return (
    <main>
      <div className="container">
        <Toolbar
          value={formValue}
          handleChange={handleFormChange}
          handleClick={toggleModal}
        />
        <Modal
          open={modalOpen}
          handleClose={toggleModal}
          handleSave={handleAddEvent}
        />
        <List
          events={events}
          handleDelete={handleDeleteEvent}
          search={formValue.search}
        />
      </div>
    </main>
  );
};
