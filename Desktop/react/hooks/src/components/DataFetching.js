import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching(){
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [buttonClick,buttonFetch]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[buttonClick])
    const handler =()=>{
        buttonFetch(id)
    }
    return(
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)} />
    <button type='button' onClick={handler}>Click Me!!!!!</button>
    <div>{post.title}</div>
        </div>
    )
}
export default DataFetching