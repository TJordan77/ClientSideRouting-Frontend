import React from "react";
import axios from "axios";
import { Link } from "react-router";
import "./TaskCardStyles.css";

const API_URL = process.env.API_URL || "http://localhost:8080";

const TaskCard = ({ task, fetchAllTasks }) => {
  const handleCompleteTask = async () => {
    try {
      await axios.patch(`http://localhost:8080/api/tasks/${task.id}`, {
        completed: !task.completed,
      });
      fetchAllTasks();
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${task.id}`);
      fetchAllTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : "incomplete"}`}>
      <div className="task-card-header">
        <h2>
          <Link to={`/tasks/${task.id}`}>{task.title}</Link>
        </h2>
        <h2>{task.title}</h2>
        <div className="task-card-header-buttons">
          {task.completed ? (
            <p onClick={handleCompleteTask}>🔄</p>
          ) : (
            <p onClick={handleCompleteTask}>✅</p>
          )}
          <p onClick={handleDeleteTask}>🗑️</p>
        </div>
      </div>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
