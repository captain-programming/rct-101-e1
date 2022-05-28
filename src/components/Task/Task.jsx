import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import removeIcon from "../../assets/remove.svg"



const Task = ({ task, handleUpdateTask, handleRemoveTask }) => {
  const toggleTaskStatus = () => {
    let toggledTask = {
      ...task,
      done: !task.done,
    };
    handleUpdateTask(toggledTask);
  };

  const updateCount = (newCount) => {
    if(newCount > 0){
      let updatedCountTask = {
        ...task,
        count: newCount,
      };
      handleUpdateTask(updatedCountTask);
    }
  };

  return (
    <li data-cy="task" className={styles.task}>
      <div className={styles.list}>
        <input 
          type="checkbox" 
          data-cy="task-checkbox"
          checked={task.done}
          onChange={toggleTaskStatus} 
          />
        <div data-cy="task-text">{task.text}</div>
      </div>
      <div className={styles.counterdiv}>
        <Counter count={task.count} updateCount={updateCount} />
        <button 
          data-cy="task-remove-button"
          onClick={() => handleRemoveTask(task.id)}
          className={styles.removeButton}
          >
          <img src={removeIcon} alt="Remove button text" />
        </button>
        </div>
    </li>
  );
};

export {Task};
