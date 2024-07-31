import { useMemo, useState } from "react";


function factorial(n){
    console.log('calculating factorial of '+ n)
    if(n<=1) return 1;
    return n*factorial(n-1);

}


function UseMemoDemo1(){
    let [number,setnumber]=useState(0)
    let [count,setcount]=useState(0)
    let result=useMemo(()=>factorial(number),[number])
    console.log('component is re-rendering')
    return(<>
    <b>factorial result is </b>{result}<br></br>
    <b>Count is</b> {count} <br></br>
    <button onClick={()=>setnumber(number+1)}>Increment Number</button><br></br>
    <button onClick={()=>setcount(count+1)}>Increment Count</button>
    </>)
}
export default UseMemoDemo1