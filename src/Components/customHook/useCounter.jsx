import { useState } from "react"

function useCounter(initialValue = 0) {

    const [value, setValue] = useState(initialValue)

    const increment = () => setValue(value + 1)
    const decrement = () => setValue(value - 1)
    const reset = () => setValue(initialValue)

  return {increment, decrement, reset, value}
}

export default useCounter