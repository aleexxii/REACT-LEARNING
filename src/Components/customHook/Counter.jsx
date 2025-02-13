import useCounter from "./useCounter"

function Counter() {
    const {increment, decrement, reset, value} = useCounter(10)
return (
    <div className="text-center mt-5">
        <h1 className="text-2xl">{value}</h1>
        <div>
            <button onClick={increment} className="m-2 px-4 py-2 text-lg bg-blue-500 text-white rounded"> + </button>
            <button onClick={decrement} className="m-2 px-4 py-2 text-lg bg-red-500 text-white rounded"> - </button>
            <button onClick={reset} className="m-2 px-4 py-2 text-lg bg-gray-500 text-white rounded"> Reset </button>
        </div>
    </div>
)
}

export default Counter