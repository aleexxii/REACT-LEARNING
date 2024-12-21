import { useState } from "react"
import InpComp from "./InputComponent"

function Test () {
    const [input, setInput] = useState('')
    
    return (
        <>
        <InpComp />
        </>
    )
}

export default Test