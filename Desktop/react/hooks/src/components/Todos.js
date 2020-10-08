import React,{useReducer} from 'react'
const initialstate={
  todos:[],
  name:'',
  current:[],
  leftcomplete:0

}
const reducer=(state,action)=>{
  switch(action.type){
      case `addTodos`:
      return{...state,todos:state.todos.concat({id:action.payload.id,todo:action.payload.name,complete:action.payload.complete}),current:state.current.concat({id:action.payload.id,todo:action.payload.name,complete:action.payload.complete}),leftcomplete:state.leftcomplete+1,name:action.payload.text}
     case `addtext`:
       return { ...state, name: action.payload} 
     case `changecomplete`:
      return{...state,todos:action.payload.arr1,current:action.payload.arr1,leftcomplete:action.payload.count} 
      case `deletetodo`:
        return {...state,todos:state.todos.filter(todos => todos.id !== action.payload.id),current:state.current.filter(current => current.id !== action.payload.id)}
      case `Active`:
        return{...state,current:action.payload.arr2}
        case `Complete`:
        return{...state,current:action.payload.arr2}
        case `Selected`:
          return{...state,todos:action.payload.arr2,current:action.payload.arr2}
          case `All`:
            return{...state,current:action.payload.arr2}
      }
}    
function Todos(){
  const [todos,dispatch]=useReducer(reducer,initialstate)
  const stylehide = {visibility : 'hidden'};
  let text=' '
  const addtodos=(e)=>{
    e.preventDefault();
    dispatch({
      type:'addTodos',
      payload:{
        id: Date.now(),
      name:todos.name.value,
      complete: false,
      }
    })
    document.getElementById("input").reset();
    let c=todos.current.length
    if(c>=0){
      let x = document.getElementById('td');
      if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
      }
     }
    }
    const changehandler = (value) => {
      dispatch({
        type:'addtext',
        payload:{
          value,
        }
      })
    };
    const checkbochandler = (id) => (e) => {
      let arr1 = todos.todos;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].id == id) {
          arr1[i].complete = !arr1[i].complete;
        }
      }
      let c = arr1.filter((e) => e.complete == false);
      let count = c.length;
  
      let l = arr1.filter((e) => e.complete == true);
      let d = l.length;
      if(d>0){
        let x = document.getElementById('b');
      if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
      }
      }
      if(d==0){
        let x = document.getElementById('b');
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      }
      }
      dispatch({
        type:'changecomplete',
        payload:{
          arr1,
          count,
        }
      })
    };
       
    const remove = (id) => (e) => {
      dispatch({
        type:'deletetodo',
        payload:{
          id
        }
      })
      let arr1 = todos.todos;
      arr1 = arr1.filter((e) => e.id != id);
      let c = arr1.filter((e) => e.complete == false);
      let count = c.length;
      let l = arr1.length;
      if(l==0){
        let x = document.getElementById('td');
        if (x.style.visibility === "visible") {
          x.style.visibility = "hidden";
        }
       }
       if(l==0){
        let x = document.getElementById('b');
        if (x.style.visibility === "visible") {
          x.style.visibility = "hidden";
        }
       }
    }
    const activename = () => {
      let arr2 = todos.todos;
      arr2 = arr2.filter((e) => e.complete == false);
      dispatch({
        type:'Active',
        payload:{
        arr2,
        }
      })
    };
    const inactivename = () => {
      let arr2 = todos.todos;
      arr2 = arr2.filter((e) => e.complete == true);
      dispatch({
        type:'Complete',
        payload:{
        arr2,
        }
      })
      
    };
    const selected = () => {
      let arr2 = todos.todos;
      arr2 = arr2.filter((e) => e.complete == false);
      let c = arr2.filter((e) => e.complete == true);
      let d = c.length;
      if(d==0){
        let x = document.getElementById('b');
        if (x.style.visibility === "visible") {
          x.style.visibility = "hidden";
        }
       }
       if(arr2.length==0){
        let x = document.getElementById('td');
        if (x.style.visibility === "visible") {
          x.style.visibility = "hidden";
        }
       }
       dispatch({
        type:'Selected',
        payload:{
        arr2,
        }
      })
    };
    const all = () => {
      let arr2 = todos.todos;
      dispatch({
        type:'All',
        payload:{
        arr2,
        }
      })

    };
  console.log(todos)
  return(
      <div>
          <form onSubmit={addtodos} id='input'>
        <h1 className="primary font-xl">todos</h1>
        <input
          type="text"
          name='text'
          className="inputfield"
          value={todos.text}
          onChange={e=>changehandler(e.target.value)}
        ></input>
      </form>
      <table align="center" className="table">
        {todos.current.map((v, i) => (
          <tr key={i}>
            <td className="tabledata">
              <input
                type="checkbox"
                checked={v.complete}
                onClick={checkbochandler(v.id)}
              />
            </td>
            <td className="tabledata">
              <span className={v.complete && "strike"}>{v.todo}</span>
            </td>
            <td className="tabledata btn">
              <button onClick={remove(v.id)}>X</button>
            </td>
          </tr>
        ))}
        <tr style={stylehide} id="td">
          <td className="data">
            <span>{todos.leftcomplete} item left</span>
            <button onClick={all}>All</button>
            <button onClick={activename}>Active</button>
            <button onClick={inactivename}>Coomplete</button>
            <button style={stylehide} id="b" onClick={selected}>
              clear
            </button>
          </td>
        </tr>
        </table>
      </div>
  )
}
export default Todos