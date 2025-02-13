import { useContext } from "react";
import { MessageContext } from "./MessageProvider";

function Child1() {
  const { setMessage } = useContext(MessageContext);
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setMessage("This is From child 1")}
      >
        Click Me
      </button>
    </div>
  );
}

export default Child1;
