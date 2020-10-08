import React,{useEffect,useReducer} from 'react'
import DataFetching from './DataFetching'
import axios from 'axios'

const intialState={
    loading :true,
    error :'',
    post:{}
}
const reducer=(state,action)=>{
    switch (action.type) {
        case 'Success':
            return {loading:false,
            post :action.playload,
            error:''}
    
        case 'error':
            return{
                loading : false,
                post:{},
                error:'Somting wrong '
            }
    }
}


function DataFetchingTwo(){
    const [state,dispatch]=useReducer(reducer,intialState)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res=>{
           dispatch({type:'Success',playload:res.data})
        })
        .catch(error=>{
            dispatch({type:'error'})
        })
    },[])
    return(<div>
        {
            state.loading?'loading':state.post.title}
            {state.error?state.error:null}


    </div>)
}
export default DataFetchingTwo