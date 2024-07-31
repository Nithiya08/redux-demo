import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementById } from "./Counterreducer"
import { useState } from "react"

function Counter(){

    let count=useSelector((state)=>state.counter.count) //getting  the data from the store 
    let dispatch=useDispatch()
    let [input,setinput]=useState(0)
    return(<>
    <b>Enter the Number</b><input type="text" value={input} onChange={(event)=>setinput(event.target.value)}></input>
    <button onClick={()=>dispatch(increment())}>+</button>{count}
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(incrementById(Number(input)))}>IncrementById</button>
    </>)
}
export default Counter