

function ParentComponent () {
    return(
        <div>
            <ChildComponent name='Rahul' age={22} />
        </div>
    )
}

function ChildComponent(props){
    const {name,age} = props

    return(
        <h1 className="font-mono">`Hi, Im {name} and {age} years old`</h1>
    )
}

export default ParentComponent