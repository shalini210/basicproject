import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser, getall, insert,insertUser, updateUser } from '../slices/UserSlice'

export default function UserComponent() {
    let emailref = useRef("");
    let pwdref = useRef("");
    let dispatch = useDispatch();
    const InsertUser=()=>
    {
        const data = {uname: emailref.current.value,pwd:pwdref.current.value};
        // dispatch(insert(data));
        console.log("on btn click")
        dispatch(insertUser(data))
    }

  return (
    <>
    <div>UserComponent</div>
    <p>
        Enter EMail : <input  type="text" ref={emailref}/>
    </p>
    <p>
        Enter password : <input type="password" ref={pwdref}/>
    </p>
    <input type="button" value="save" onClick={()=>InsertUser()}/>
    <input type="button" value="Delete" onClick={()=>dispatch(deleteUser({uname: emailref.current.value}))}/>
    <input type="button" value="update" onClick={()=>dispatch(updateUser({uname: emailref.current.value,pwd:pwdref.current.value}))}/>
    <input type="button" value="select" onClick={()=>dispatch(getall())}/>
    </>
  )
}
