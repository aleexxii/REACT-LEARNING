import React, { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className="space-y-4">
      {tasks?.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent = "";

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
          className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={() => setIsEditing(false)}
          className="text-indigo-500 hover:underline flex justify-end justify-items-end"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className={`text-gray-700 ${task.done ? "line-through" : ""}`}>
          {task.text}
        </span>
        <button
          onClick={() => setIsEditing(true)}
          className="text-indigo-500 hover:underline"
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <div className="flex items-center justify-between shadow-md p-4 rounded-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
          className="w-5 h-5 text-indigo-500 focus:ring-indigo-400"
        />
        {taskContent}
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
