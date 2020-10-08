import React,{useState,useEffect} from 'react'
import './Mystl;e.css'
function Hooktodos(){
  const stylehide = {visibility : 'hidden'};
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [current, setCurrent] = useState([]);
  const [leftcomplete, setLeftComplete] = useState(0);

  const changehandler = (e) => {
    setText(e.target.value);
  };

  const storedata = (e) => {
    e.preventDefault();
    let todolist = [...todos];
    todolist.push({
      id: Date.now(),
      text,
      complete: false,
    });
    setTodos(todolist);
    setCurrent(todolist);
    console.log(todolist);
    setText("");
    setLeftComplete(leftcomplete + 1);
    let c=current.length
    if(c>=0){
      let x = document.getElementById('td');
      if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
      }
     }
  };
  const all = () => {
    setCurrent(todos);
  };
  const checkbochandler = (id) => (e) => {
    let arr1 = [...todos];
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
    setTodos(arr1);
    setCurrent(arr1);
    setLeftComplete(count);
  };
  const remove = (id) => (e) => {
    let arr1 = [...todos];
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
    setTodos(arr1);
    setCurrent(arr1);
    setLeftComplete(count)
  };
  const activename = () => {
    let arr2 = [...todos];
    arr2 = arr2.filter((e) => e.complete == false);
    setCurrent(arr2);
  };
  const inactivename = () => {
    let arr2 = [...todos];
    arr2 = arr2.filter((e) => e.complete == true);
    setCurrent(arr2);
  };
  const selected = () => {
    let arr2 = [...todos];
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
    setCurrent(arr2);
    setTodos(arr2);
  };
  return (
    <div>
      <form onSubmit={storedata}>
        <h1 className="primary font-xl">todos</h1>
        <input
          type="text"
          value={text}
          className="inputfield"
          onChange={changehandler}
        ></input>
      </form>
      <table align="center" className="table">
        {current?.map((v, i) => (
          <tr key={i}>
            <td className="tabledata">
              <input
                type="checkbox"
                checked={v.complete}
                onClick={checkbochandler(v.id)}
              />
            </td>
            <td className="tabledata">
              <span className={v.complete && "strike"}>{v.text}</span>
            </td>
            <td className="tabledata btn">
              <button onClick={remove(v.id)}>X</button>
            </td>
          </tr>
        ))}
        <tr style={stylehide} id="td">
          <td className="data">
            <span>{leftcomplete} item left</span>
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
  );
}
export default Hooktodos