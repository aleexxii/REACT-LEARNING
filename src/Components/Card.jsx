import { useState } from "react"
import Button from "./Button"


function Card () {
    const [count, setCount] = useState(0)

    return(
        <>
        <div>
            <h1>Count : { count }</h1>
            <Button count={count} setCount={setCount}/>
        </div>
        </>
    )
}

export default Card