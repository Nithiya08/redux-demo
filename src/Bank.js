import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./bankreducer";

function Bank(){
    let account=useSelector((state)=>state.bankaccount)
    let[amount,setamount]=useState(0)
    let dispatch=useDispatch()
    return(<>
    <b>Enter the amount</b><input type="text" value={amount} onChange={(event)=>setamount(event.target.value)}></input>
    <button onClick={()=>dispatch(withdraw(Number(amount)))}>withdraw</button>
    {account.balance}
    <button onClick={()=>dispatch(deposit(Number(amount)))}>deposit</button>
    {account.error && <p style={{color:'red'}}>{account.error}</p>}
    
    </>)
}
export default Bank