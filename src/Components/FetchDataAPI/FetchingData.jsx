import { useEffect, useState } from "react";


function FetchingData(){
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(data => setData(data))
    },[])

    return <p>{JSON.stringify(data)}</p>
}

export default FetchingData