import React, { useReducer } from 'react'
import AddTask from './AddTask'
import { initialTasks } from './dummyData'

const Todo = () => {

    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

const handleAddTask = (text) => {

}
  return (
    <div>
        <div>
            <h1>TODO APPLICATION</h1>
        </div>
        <div>
            <AddTask onAddTask={handleAddTask} />
        </div>
    </div>
  )
}

export default Todo