
function Button ({count,setCount}) {

    function handleCount () {
        setCount(count + 1)
    }
    return(
        <div>
            <button onClick={handleCount}>Add</button>
        </div>
    )
}

export default Button