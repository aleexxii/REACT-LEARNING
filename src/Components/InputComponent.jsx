function InpComp ({input,setInput}) {
    function handleChange (event){
        setInput(event.target.value)
    }
    return(
        <>
        <input type="text"  onChange={handleChange} />
        </>
    )
}


export default InpComp