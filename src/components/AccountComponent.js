import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deposite,Withdraw } from '../slices/AccountSlice'
import { useRef } from 'react'
export const AccountComponent = () => {
    let amountref = useRef();
    let dispatch = useDispatch("");
    const d = useSelector((state)=>state.AC.balance)
    console.log(d)
  return (
    <>
    <div>AccountComponent</div>
    <h2>current balance {d}</h2>
    <input type="text" ref={amountref}/>
    <input type="button" value="Deposite"
     onClick={()=>dispatch(deposite(parseInt(amountref.current.value)))} />
  
  <input type="button" value="Withdraw"
     onClick={()=>dispatch(Withdraw(parseInt(amountref.current.value)))} />
    </>
  )
}
