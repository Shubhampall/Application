import React,{useMemo, useState} from 'react'
function Counter(){
const [counterone,setCounterOne]=useState(0)
const [counterTwo,setCounterTwo]=useState(0)
const incrementOne=()=>
{
    setCounterOne(counterone+1)
}    
const incrementTwo=()=>{
    setCounterTwo(counterTwo+1)
}
const evenodd=useMemo(()=>
{
   let i=0
   while(i<200000000) i++
    return counterone%2==0
},[counterone])
return(
    <div>
<button onClick={incrementOne}>Counter one -{counterone}</button>
<span>{evenodd ? 'Even' : 'Odd'}</span>
<button onClick={incrementTwo}>counter Two-{counterTwo}</button>
    </div>
)

}
export default Counter