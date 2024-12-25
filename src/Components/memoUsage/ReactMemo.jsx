import { useState } from "react";
import { Plus } from "lucide-react";

const Child = ({ name }) => {
  console.log("child rendered...", Math.random());
  return (
    <div className="p-3 bg-white rounded-lg shadow-sm border border-orange-100">
      <h2 className="text-sm font-semibold text-orange-800 mb-1">
        Child Component
      </h2>
      <p className="text-xs text-orange-700">
        Hello,{" "}
        <span className="font-medium text-orange-600">{name || "Guest"}</span>!
      </p>
    </div>
  );
};

const ReactMemo = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="h-80 w-80 bg-orange-200 rounded-xl p-4">
      <div className="space-y-3">
        <div className="text-center">
          <h1 className="text-lg font-bold text-orange-800">
            Without React.Memo
          </h1>
        </div>

        <div className="bg-white/50 rounded-lg p-2">
          <h2 className="text-xs font-semibold text-orange-800 mb-1">
            Open console...
          </h2>
          <p className="text-xs text-orange-700">
            Watch how child component renders even when name hasn't changed.
          </p>
        </div>

        <div className="space-y-1">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-2 py-1.5 text-sm border border-orange-300 rounded-lg 
                     focus:ring-1 focus:ring-orange-300 focus:border-orange-400 
                     bg-white text-orange-800 placeholder-orange-300"
            placeholder="Enter name..."
          />
        </div>

        <div className="bg-white/50 rounded-lg p-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-orange-800">
            Count: {count}
          </span>
          <button
            onClick={countHandler}
            className="p-1.5 bg-white text-orange-600 rounded-lg 
                     hover:bg-orange-100 transition-colors duration-200 
                     flex items-center justify-center border border-orange-300"
          >
            <Plus size={14} />
          </button>
        </div>
        <div>
          <Child name={name} />
        </div>
      </div>
    </div>
  );
};

export default ReactMemo;
