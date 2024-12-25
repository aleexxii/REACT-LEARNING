import { useState } from "react";
import AdditionWithMemo from "./AdditionWithMemo";
import ReactMemo from "./ReactMemo";

const Addition = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [inputResult, setInputResult] = useState(0);


  const handleClick = () => {

    const result = Number(value1) + Number(value2)

    setInputResult(result);
  };

  console.log("Component rendering...", Math.random());

  return (
    <div className="flex justify-items-center mt-8 justify-evenly">
      <div className="h-80 w-80 bg-orange-200 rounded-xl justify-items-center">
        <div>
          <h1 className="font-extrabold text-indigo-300 text-xl">
            Without Memo
          </h1>
        </div>
        <div className="pt-6">
          <div className="flex justify-center">
            <p className="mt-3 font-bold text-xs text-violet-400">
              It's a addition program after inputing two valus click on result button then
              opern your console and press result button again and again 
              you can see that how many times your component re-renders
            </p>
          </div>
          <div className="mt-4">
            <div>
            <label
              htmlFor="calculating"
              className="font-extrabold cursor-pointer"
            >
              Enter Fist num :
            </label>
            <input
              className="text-black ml-3"
              type="number"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
            </div>
            <div>
            <label
              htmlFor="calculating"
              className="font-extrabold cursor-pointer"
            >
              Enter second num :
            </label>
            <input
              className="text-black ml-3"
              type="number"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            />
            </div>
          </div>
          <div className="flex justify-center m-4 ">
            <button
              className="border-2 rounded-md font-bold hover:bg-cyan-800 border-slate-800 p-1"
              onClick={handleClick}
            >
              Result
            </button>
          </div>
          <span className="font-extrabold cursor-pointer">Output : </span>
          <span> {inputResult} </span>
        </div>
        <div className="flex justify-center">
          <span className="mt-3 font-bold text-xs text-gray-700 cursor-pointer">
            Open your console then you can see how many times your component
            rendered
          </span>
        </div>
      </div>

        <AdditionWithMemo />
        <ReactMemo />
    </div>
  );
};

export default Addition;
