import { useState } from "react";

const AddTask = ({onAddTask}) => {
  cont[(text, setText)] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Your Text..."
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddTask;
