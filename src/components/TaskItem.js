

// src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleCompletion }) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(task.id, { ...task, name: newName, description: newDescription });
    setEditing(false);
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <div>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <span onClick={() => toggleCompletion(task.id)}>{task.name}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
