   import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {  Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  let [email,setemail]=useState('scott@test.com')
  let [pass,setpass]=useState('Scott123')
  useEffect(()=>{document.title='Login'},[])
  const notify= ()=>toast.success('successful!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition:Bounce
    
    });
    const notifyfail=()=>toast.error('🦄 unsuccessful!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition:Bounce
     
      });

let onLoginClick=async()=>{
  let req=await fetch(`http://localhost:4000/users?email=${email}&password=${pass}`,{method:'GET'})
  console.log(req)
  if(req.ok){
    let reqbody=await req.json()
    
    if(reqbody.length>0)
      notify()
     else notifyfail()

    }
    
  }



  return (
    <div>
    
    <h1 className='display-1 fst-italic m-4 p-2 w-50 border-bottom border-3 border-warning'>Login</h1>
    <Form.Control  className="w-50 m-auto my-4" type="email"  placeholder="Enter email" value={email}
    onChange={(e)=>setemail(e.target.value)} />
    <Form.Control  className="w-50 m-auto my-4" type="text" placeholder="Enter password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
    <Button  onClick={onLoginClick} variant='info' className='w-50  m-auto my-4 d-block'>Login</Button>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition: Bounce
/>
    </div>
  )
}

export default Login