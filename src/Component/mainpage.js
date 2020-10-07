import React,{Component} from 'react'
import './Mystl;e.css'
class Mainpage extends Component{
  constructor(props)
{
  super(props)
  this.state ={
   arr : [],
   value :'', 
   leftcomplete :0,
   status :0,
   current :[]
  }
  this.storename=this.storename.bind(this)
  this.checkbochandler=this.checkbochandler.bind(this)
  this.activename=this.activename.bind(this)
  this.inactivename=this.inactivename.bind(this)
  this.all = this.all.bind(this);
  this.remove=this.remove.bind(this)
  this.selected=this.selected.bind(this)
}
componentDidMount(){
  this.setState({
    current :this.state.arr,
    leftcomplete :this.state.leftcomplete
  })
}
  storename=event=>
  {
    event.preventDefault()

    const prevState=this.state.arr;
    const currentTodo={
      id:Date.now(),
      name : this.state.value,
      complete :false 
    };
  prevState.push(currentTodo);
  this.setState({
    arr : prevState
  });
  {this.setState(prevState=>({
    leftcomplete:prevState.leftcomplete+1,
    value : ''
  }))
  console.log(this.state.arr)
  let c=this.state.current.length
 if(c>0){
  let x = document.getElementById('td');
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  }
 }
} 
  }


all=()=>
 {
   this.setState({
 current :this.state.arr
   })
  }
 checkbochandler=(id)=>(e)=>{
   console.log(id)
   let arr1=this.state.arr;
   for(let i=0;i<arr1.length;i++){
     if(arr1[i].id==id){
       arr1[i].complete=!arr1[i].complete
     }
   }
  let c=arr1.filter((e)=>e.complete ==false)
  let count=c.length
  let l=arr1.filter((e)=>e.complete ==true)
  let d=l.length
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
  console.log(count)
   this.setState({
    arr : arr1,
    leftcomplete:count
   })
  }
 remove=(id)=>(e)=>
 {
   let arr1=this.state.arr;
   arr1 =arr1.filter((e)=>e.id !=id)
   let c=arr1.filter((e)=>e.complete ==false)
   let count=c.length
   let l=arr1.length
   console.log(l)
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
   this.setState({
     arr:arr1,
     current :arr1,
     leftcomplete:count
   })
 }
 activename=()=>
{
 let arr2=this.state.arr
 arr2=arr2.filter((e)=>e.complete==false)
 this.setState({
   current : arr2,
 })
}
 inactivename=()=>
{
 let arr2=this.state.arr
 arr2=arr2.filter((e)=>e.complete==true)
  this.setState({
    current :arr2 
  })

}
selected=()=>
{
  let arr2=this.state.arr
  arr2=arr2.filter((e)=>e.complete==false)
  let c=arr2.filter((e)=>e.complete==true)
  let d=c.length
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
  this.setState({
    arr :arr2,
    current :arr2
  })
}
  render()
{
  const {current} =this.state;
  const stylehide = {visibility : 'hidden'};
  const stylewidth ={width :'60%',padding: '12px 20px',margin: '7px 0' ,boxSizing : 'border-box;'}
  return(
  <div>
  <form onSubmit={this.storename}>
<h1 className='primary font-xl'>todos</h1>
<input type='text' value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})} size='50' style={stylewidth}></input>
</form>
<table align='center' className='table'>
  {current?.map(v =>(<tr>
 <td  className='tabledata' ><input type='checkbox' checked={v.complete} onClick={this.checkbochandler(v.id)}/>
  </td>
  <td className='tabledata'><span className={v.complete && 'strike'}>{v.name}</span></td>
  <td className='tabledata btn'><button onClick={this.remove(v.id)}>X</button></td>
  </tr>))}
  <tr style={stylehide} id='td'>
    <td className='data' >
  <span>{this.state.leftcomplete} item left</span>
      <button onClick={this.all}>All</button>
      <button onClick={this.activename}>Active</button>
      <button onClick={this.inactivename}>Coomplete</button>
      <button style={stylehide} id='b' onClick={this.selected}>clear</button>
      </td>
  </tr>
  </table >
  </div>
  )
}
}
export default Mainpage
