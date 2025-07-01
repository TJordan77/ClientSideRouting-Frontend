import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8080";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTask() {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/tasks/${id}`);
        setTask(data);
      } catch (err) {
        console.error("Error fetching task:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTask();
  }, [id]);

  if (loading) return <p>Loading…</p>;
  if (!task)    return <p>Task not found.</p>;

  return (
    <div className="task-details">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>
        <strong>Status:</strong> {task.completed ? "Completed" : "Incomplete"}
      </p>
      {task.user && <p><strong>Assigned to:</strong> {task.user.name}</p>}
    </div>
  );
};

export default TaskDetails;
