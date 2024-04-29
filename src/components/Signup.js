import React from 'react'
import { useRef,useState } from 'react'
export const Signup = () => {
    const [msg,setmsg]=useState("");
let emailref = useRef("");
let pwdref=useRef("");
    const showData =async ()=>
    {
const userData = {uname:emailref.current.value,pwd:pwdref.current.value};
setmsg("Email:"+userData.uname+" PWD:"+userData.pwd);

let response = await fetch("http://localhost:3030/user",
 {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    //  mode: "cors", // no-cors, *cors, same-origin   
    headers: {
        'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    
    body: JSON.stringify(userData), 
  });
console.log(response);

    }
  return (
    <>
    <h3 className='text-warning'>{msg}</h3>
       <div class='col-md-4  offset-md-2 '>
    <h2 className='text-primary'>Signup</h2>
  <div class="form-group">
    <label for="txtemail">Email address</label>
    <input type="email" ref={emailref} class="form-control" id="txtemail" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp"  class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="txtpwd">Password</label>
    <input type="password" id='txtpwd' ref={pwdref} class="form-control" placeholder="Password"></input>
    
  </div>
  
  <br></br>
<input onClick={showData} type="button"   class="btn btn-primary" value="submit"></input>
    </div>
    </>
  )

}
