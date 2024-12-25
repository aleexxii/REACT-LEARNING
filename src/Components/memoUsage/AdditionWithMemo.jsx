import { useCallback, useMemo, useState } from "react";

const AdditionWithMemo = () => {
  const [inputValue, setInputValue] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [inputResult, setInputResult] = useState(0);

  const handleBtnClick = useMemo(() => {
    const result = Number(inputValue) + Number(inputValue2)
    setInputResult(result);
  },[inputValue]);

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  },[]);

  const handleChange2 = useCallback((e) => {
    setInputValue2(e.target.value);
  },[]);

  console.log("with memo rendering");

  return (
    <div className="h-80 w-80 bg-orange-200 rounded-xl justify-items-center">
      <div>
        <h1 className="font-extrabold text-indigo-300 text-xl">With Memo</h1>
      </div>
      <div className="pt-6">
        <div className="flex justify-center">
          <p className="mt-3 font-bold text-xs text-violet-400">
            Add 7 digit number then it will make sense
          </p>
        </div>
        <div className="mt-4">
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          </div>
           <div className="mt-4">
           <label
            htmlFor="calculating"
            className="font-extrabold cursor-pointer"
          >
            Enter second num :
          </label>
          <input
            className="text-black ml-3"
            type="number"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
          />
           </div>
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

export default AdditionWithMemo;
