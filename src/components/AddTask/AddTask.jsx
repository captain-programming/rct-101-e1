import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
 
  const handleClick = () =>{
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className={styles.todoForm}>
      <input 
        data-cy="add-task-input" 
        value={newTask} 
        onChange={({target}) => setNewTask(target.value)} 
        type="text"
        className={styles.input}
      />
      <button data-cy="add-task-button" onClick={handleClick} className={styles.btn}>
        +
      </button>
    </div>
  );
};

export default AddTask;
