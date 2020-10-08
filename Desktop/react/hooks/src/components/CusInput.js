import React,{useState} from 'react'
import useInput from './hook/useInput'
function CusInput(){
const [firstname,bindfirstname,restfirstname]= useInput('')
const [lastname,bindlastname,restlastname]= useInput('')
 const submitHandler=(e)=>{
e.preventDefault()
alert(`hello ${firstname} and ${lastname}`)
restfirstname()
restlastname()
 }   
 return(
        <div>
            <form onSubmit={submitHandler}>
         <input type='text' {...bindfirstname} />
         <input type='text' {...bindlastname} />
         <button type='submit' />
         </form>
        </div>
    )
}
export default CusInput