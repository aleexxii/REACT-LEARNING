import { useCallback, useMemo, useState } from "react";
import { findNthPrime } from "./helper";

const MemoComponent = () => {
  const [inputValue, setInputValue] = useState(0);
  const [inputResult, setInputResult] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  const handleBtnClick = useMemo(() => {
    const starTime = performance.now();
    const result = findNthPrime(inputValue);
    const endTime = performance.now();
    setTimeTaken((endTime - starTime) / 1000);
    setInputResult(result);
  },[inputValue]);

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  },[]);

  console.log("with memo rendering");

  return (
    <div className="h-80 w-80 bg-orange-200 rounded-xl justify-items-center">
      <div>
        <h1 className="font-extrabold text-indigo-300 text-xl">With Memo</h1>
      </div>
      <div className="pt-6">
        <span className="font-extrabold cursor-pointer">Time Taken : </span>
        <span className=" cursor-pointer">{timeTaken.toFixed(4)} seconds</span>
        <div className="flex justify-center">
          <p className="mt-3 font-bold text-xs text-violet-400">
            Add 7 digit number then it will make sense
          </p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="calculating"
            className="font-extrabold cursor-pointer"
          >
            Enter digits :
          </label>
          <input
            className="text-black ml-3"
            type="number"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center m-4 ">
          <button
            className="border-2 rounded-md font-bold hover:bg-cyan-800 border-slate-800 p-1"
            onClick={handleBtnClick}
          >
            Find Fibonacci
          </button>
        </div>
        <span className="font-extrabold cursor-pointer">Output : </span>{" "}
        <span> {inputResult} </span>
      </div>
    </div>
  );
};

export default MemoComponent;