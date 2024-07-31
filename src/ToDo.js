import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add,remove, update } from "./ToDoreducer"

function ToDo(){
    let todos=useSelector((state)=>state.todos)
    let dispatch=useDispatch()
    let [input,setinput]=useState('')
    return(<>
    <b>Enter The Task</b><input type="text" value={input} onChange={(event)=>setinput(event.target.value)}></input>
    <br></br>
    <button onClick={()=>{dispatch(add(input)); setinput('')}}>Submit</button>
    <ol>
        {todos && todos.map((todo)=><li key={todo.id}>{todo.task} {todo.completed?'completed':'Not completed'}&nbsp;&nbsp;

        <button onClick={()=>dispatch(remove(todo.id))}>Delete</button>
        <button onClick={()=>dispatch(update(todo.id))}>update</button>
        </li>)}
    </ol>
    </>)
}
export default ToDo