import React,{useState}  from 'react'

function Hookcountertwo(){
    const intilization =0
    const [count,setcount]=useState(intilization)
    const increment=()=>{
        for(let i=0;i<5;i++)
        {
            setcount(prevcount=>prevcount+1)
        }
    }
    return(
        <div> 
             
             Count :{count}
            <button onClick={()=>setcount(intilization)}>Rest</button>
            <button onClick={()=>setcount(prevcount=>prevcount+1)}>incremet</button>
            <button onClick={()=>setcount(prevcount=>prevcount-1)}>decrement</button>
            <button onClick={increment}>incremet 5</button>        
        </div>
    )
}
export default Hookcountertwo