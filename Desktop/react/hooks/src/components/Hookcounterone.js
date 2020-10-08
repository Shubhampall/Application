import React,{useState,useEffect}  from 'react'

function Hookcounterone(){
    const [count,setcount]=useState(0)
    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })
    return(
        <div>
            <button onClick={()=>setcount(count+1)}>count {count} times</button>
        </div>
    )
}
export default Hookcounterone