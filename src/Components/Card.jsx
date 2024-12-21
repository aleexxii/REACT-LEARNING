import { useState } from "react"
import Button from "./Button"
import { Link } from "react-router-dom"
import { ArrowBigRightDash, LucideAArrowUp } from "lucide-react"


function Card () {
    const [count, setCount] = useState(0)

    return(
        <>
        <div>
            <h1>Count : { count }</h1>
            <Button count={count} setCount={setCount}/>
        </div>

        {/* <Link to='accordian'>
        <div className="flex justify-end mt-40">
            Next
                <ArrowBigRightDash fill="yellow"/> 
            
        </div>
        </Link> */}
        </>
    )
}

export default Card