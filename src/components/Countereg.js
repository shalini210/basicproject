import React from 'react'
import { increment,decrement,incrementbyValue } from '../slices/CounterSlice'
import { useSelector, useDispatch } from 'react-redux'
export const Countereg = () => {
    let dispatch = useDispatch("");
    const n = useSelector((state)=>state.CR.value)
    const name = useSelector((state)=>state.CR.username)
  return (
    <div>
        <h3>{name}</h3>
        <p>{n} </p>

        {n<5?<input type="button" value="+" onClick={()=>dispatch(increment())}/>:" "}
        {n>0? <input type= "button" value="-" onClick={()=>dispatch(decrement())}/>:" "}
       <input type="button" value="increase by 10" onClick={()=>dispatch(incrementbyValue(10))}/>
    </div>
  )
}
