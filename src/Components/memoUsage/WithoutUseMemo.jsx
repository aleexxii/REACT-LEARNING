import { useState } from "react";
import AdditionWithMemo from "./WithUseMemo";
import ReactMemo from "./ReactMemo";
import { products } from "./selectedItem";


const WithoutUseMemo = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('bg-orange-200')
  const [items] = useState(products)

  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500']

  // It will return when the item.isSelected getting true
  const selectedItem = items.find((item) => item.isSelected)


  const handleClick = () => {
    setCount(count + 1)
  };

  const handleBackground = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setBgColor(randomColor)
  }

  return (
    <div className="flex justify-items-center mt-8 justify-evenly">
      <div className={`h-80 w-80 ${bgColor} rounded-xl justify-items-center`}>
        <div>
          <h1 className="font-extrabold text-indigo-300 text-xl">
            Without Memo
          </h1>
        </div>
        <div className="pt-6">
          <div className="flex justify-center">
            <p className="mt-3 font-bold text-xs text-violet-400">
              Click the Increment but rapidly (fastly)
            </p>
          </div>
          <div className="mt-4">
            <h1 className="font-extrabold cursor-pointer">Selected Item : {selectedItem?.id}</h1>
            <h1 className="font-extrabold cursor-pointer"> Count : {count} </h1>

          </div>
          <div className="flex justify-center m-4 ">
            <button
              className="border-2 rounded-md font-bold hover:bg-cyan-800 border-slate-800 p-1"
              onClick={handleClick}
            >
              Increment
            </button>
          </div>
          
        </div>
        <div className="flex justify-center">
          <span className="mt-3 font-bold text-xs text-gray-700 cursor-pointer">
            Change background button
            <div className="flex justify-center mt-3">
            <button
              className="border-2 rounded-md font-bold hover:bg-cyan-800 border-slate-800 p-1"
              onClick={handleBackground}
            >
              Bg-Color
            </button>
            </div>
          </span>
        </div>
      </div>

        <AdditionWithMemo />
        <ReactMemo />
    </div>
  );
};

export default WithoutUseMemo;
