import React,{useState}  from 'react'

function Hookcounterfour(){
    const [items,setitems]=useState([])
    const additems=()=>{
        setitems([...items,{id:items.length,value: Date.now()}])
    }
    return(
        <div>
            <button onClick={additems}>Date</button>
            <ul>
    {items.map(item=>(<li key={item.id}>{item.value}</li>))
                }
            </ul>
        </div>
    )
}
export default Hookcounterfour