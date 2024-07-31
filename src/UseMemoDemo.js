import { useMemo, useState } from "react";


function expensiveCalculation(a,b){
    console.log('computing expensive calculation...')
    return Number(a) + Number(b);
}



function UseMemoDemo({a,b}){
let expensiveResult=useMemo(()=>expensiveCalculation(a,b),[a,b])
let [count,setcount]=useState(0)
console.log('computing re-rendering')
return(<>
<b>Result</b>{expensiveResult}<br></br>
<button onClick={()=>setcount(count+1)}>Increment</button>
<b>Count:{count}</b>
</>)
}
export default UseMemoDemo