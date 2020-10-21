import React, { useReducer,useEffect } from 'react'
const initialstate={
    Neme:'',
    Posts:[],
    Comment:false 
}
const reducer=(state,action)=>{
    switch(action.type){
        case "name":
            return{...state,Name:action.payload}
        case "post":
            return{...state,Post:action.value}
     }
}
function Post() {
    const [state,dispatch]=useReducer(reducer,initialstate)
    const user=localStorage.getItem("Email");
    useEffect(()=>{
        fetch(`http://localhost:3333/users/${user}`)
        .then((response) => response.json())
        .then((json)=>dispatch({type:"name",payload:json.first_name+ " " +json.last_name}))
        .catch((error)=>alert(`${error}`))
        fetch('http://localhost:3333/posts?userid='+user)
        .then((response) => response.json())
        .then((json)=>dispatch({type:"posr",payload:json}))
        .catch((error)=>alert(`${error}`))
    })
    return
     (
        <div>
            
        </div>
    )
}

export default Post
