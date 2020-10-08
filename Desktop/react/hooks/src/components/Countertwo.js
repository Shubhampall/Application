import React,{useReducer} from 'react'
const initialstate={
    firstcounter :0
}
const reducer=(state,action)=>{
switch(action.type){
    case `increment`:
        return {firstcounter:state.firstcounter+1}
    case `decrement`:
        return {firstcounter:state.firstcounter-1}
    case `reset`:
        return initialstate
        default:
            return state
}
}
function Countertwo()
{
  const[count,dispatch] =useReducer(reducer,initialstate)
    return(
        <div>
            Count-{count.firstcounter}
            <button onClick={()=>dispatch({type :'increment'})}>increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Rest</button>
        </div>
    )
} 
export default Countertwo