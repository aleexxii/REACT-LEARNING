import React, { act, useReducer } from 'react'
import AddTask from './AddTask'
import { initialTasks } from './dummyData'
import TaskList from './TaskList'

function taskReducer(tasks, action) {
    switch(action.type) {
        case 'added' : {
            return[...tasks,{
                id: action.id,
                text : action.text,
                done :false
            }]
        }
        case 'changed' : {
            return tasks.map( t => {
                if(t.id == action.task.id){
                    return action.task
                }else{
                    return t
                }
            })
        }
        case 'deleted' : {
            return tasks.filter(t => t.id !== action.id)
        }
        default : {
            throw Error('unknown action: ' + action.type)
        }
    }
}

export default function Todo () {

    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

function handleAddTask (text) {
    dispatch({
        type : 'added',
        id : nextId++,
        text : text
    })
}
function handleChange(task){
    dispatch({
        type : 'changed',
        task : task
    })
}

function handleDelete(taskId){
    dispatch({
        type : 'deleted',
        id : taskId
    })
}
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
        <div className="mb-6">
            <h1 className="text-4xl font-bold text-indigo-600">TODO APPLICATION</h1>
        </div>
        <div className="w-full max-w-md mb-6">
            <AddTask onAddTask={handleAddTask} />
        </div>
        <div className="w-full max-w-md">
            <TaskList tasks={tasks} onChangeTask={handleChange} onDeleteTask={handleDelete} />
        </div>
    </div>
  )
}

let nextId = 3