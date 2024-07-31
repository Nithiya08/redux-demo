import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./ToDoreducer";
import { addBook, removeBook } from "./formreducer";

function Form(){
    let books=useSelector((state)=>state.books)
    let dispatch=useDispatch()
    let [title,settitle]=useState('')
    let [author,setauthor]=useState('')
    let [price,setprice]=useState(0)

    return(<>
    <b>Enter Title:</b><input type="text" value={title} onChange={(event)=>settitle(event.target.value)}></input><br></br>
    <b>Enter author:</b><input type="text" value={author} onChange={(event)=>setauthor(event.target.value)}></input><br></br>
    <b>Enter price:</b><input type="text" value={price} onChange={(event)=>setprice(event.target.value)}></input><br></br>
    <button onClick={()=>dispatch(addBook({'id':Date.now(),'title':title,'author':author,'price':price}))}>Add</button>
    {JSON.stringify(books)}
    </>)
}
export default Form