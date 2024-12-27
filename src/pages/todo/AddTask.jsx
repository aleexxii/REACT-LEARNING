import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded-lg">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Your Text..."
        className="flex-grow border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        ADD
      </button>
    </div>
  );
}
