import React, { useState } from 'react';
import Header from './component/Header';
import "./App.css";
//import { Card } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './component/TaskList';
import NewTask from './component/NewTask';
import ConfirmModal from './component/ConfirmModal';

function App() {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  const handleDelete = () => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== id
    ));
    setShowModal(false);
  };

  const handleModal = (id) => {

    setShowModal(true);
    setId(id);
  }
  const closeModal = () => {
    setShowModal(false);

  }


  return (
    <div className="todo">
      <Header />
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TaskList allTasks={allTasks} handleModal={handleModal} />
      {showModal ? <ConfirmModal handleDelete={handleDelete} closeModal={closeModal} /> : null}
    </div>
  );

};



export default App;
