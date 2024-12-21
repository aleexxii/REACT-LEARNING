import { useState } from "react"


function ParentComponent2() {

    const [data, setData] = useState('')

    function handleData(data) {
        setData(data)
    }
    return(
        <div>
            <h1>From Child : {data} </h1>
            <ChildComponent2 onHandle={handleData} />
        </div>
    )
}

function ChildComponent2({onHandle}){
    const [data , SetData] = useState('')

    function handleData(event){

        SetData(event.target.value)
    }

    return(
        <>
        <input type="text" value={data} onChange={handleData}/>
        <button onClick={() => onHandle(data)}>Send To Parent</button>
        </>
    )
}


export default ParentComponent2