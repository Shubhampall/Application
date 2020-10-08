import React,{useState}  from 'react'

function Hookcounterthree(){
    const [name,setname]=useState({firstname: '',lastname :''})
    return(
        <div>
        <form>
            <input type='text' value={name.firstname} onChange={e=>setname({...name,firstname:e.target.value})}></input>
            <input type='text' value={name.lastname} onChange={e=>setname({...name,lastname:e.target.value})}></input>
        </form>
    <h2>Your firstname is ={name.firstname}</h2>
    <h2>Your lastname is={name.lastname}</h2>  
        </div>
    )
}
export default Hookcounterthree