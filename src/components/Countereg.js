import React from 'react'
import { increment,decrement } from '../slices/CounterSlice'
import { useSelector, useDispatch } from 'react-redux'
export const Countereg = () => {
    let dispatch = useDispatch("");
    const n = useSelector((state)=>state.CR.value)
    const name = useSelector((state)=>state.CR.username)
  return (
    <div>
        <h3>{name}</h3>
        <p>{n} </p>
        <input type="button" value="+" onClick={()=>dispatch(increment())}/>
        <input type= "button" value="-" onClick={()=>dispatch(decrement())}/>
    </div>
  )
}
