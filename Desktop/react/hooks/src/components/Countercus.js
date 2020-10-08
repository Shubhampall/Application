import React from 'react'
import useCounter from './hook/useCounter'


function Countercus(){
const [count,increment,decrement,reset]=useCounter(10,2)
return(<div>
<h2>counter -{count}</h2>
<button onClick={increment}>increment</button>
<button onClick={decrement}>decrement</button>
<button onClick={reset}>reset</button>
</div>)
}
export default Countercus