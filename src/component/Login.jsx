 
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';
 

function Login() {
let navigate=useNavigate();
  
 let [data,setData]=useState({ email:"",password:""})

let value,name;
let handelChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setData({...data,[name]:value});
 }
 console.log(data);

// signin post 
 let handelsignup= async(e)=>{
   try{ 
   e.preventDefault();
 await signInWithEmailAndPassword(auth,data.email,data.password);
toast.success('user login succfull',{position:'top-center'});
    navigate('/')
}

   
 catch(e){
   navigate('/signup')
 
   toast.error('login not successfull');
 }
}

 
 return (
    <center className='mt-[5vw]  mx-[10vw] md:mx-[25vw] lg:mx-[30vw] px-3 py-4 shadow-2xl rounded-lg'>
        <form method='POST' action='/login' onSubmit={handelsignup} className='flex   flex-col px-3 py-4'>
        <h1 className='text-center text-[4.5vw] md:text-[3.2vw] font-bold'>LOGIN</h1>

   <label htmlFor="" className='text-start  '>Email:</label>

<input type='email' required name='email' alt="" className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' value={data.email} onChange={handelChange}/>
<label htmlFor="" className='text-start '>Password:</label>

<input type='password' required className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' name='password' alt=""  value={data.password} onChange={handelChange}/>
 

  <button type='submit' className='rounded-full text-center self-center px-3 my-3 py-1 bg-red-500 text-white'>Login</button>
    <div className='flex items-center justify-end mb-2'> 
     <a className='font-semibold text-[.7rem] '>Do not have Accout?</a>
     <Link to='/signup' className='text-blue-600 text-[.7rem]'>SignUp</Link> 
      </div> 

        </form>
     </center>
  )
}

export default Login