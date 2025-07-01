// All the Single Users! All the Single Users!
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.API_URL || "http://localhost:8080";

  useEffect(() => {
    fetch(`${API_URL}/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading user data...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <h2>Tasks for {user.name}</h2>
      {user.tasks && user.tasks.length > 0 ? (
        <ul>
          {user.tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.title}</Link> -{" "}
              {task.completed ? "Completed" : "Incomplete"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks assigned to this user.</p>
      )}
    </div>
  );
};

export default SingleUser;
