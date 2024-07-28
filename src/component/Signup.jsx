 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
 import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth,db } from '../firebase/firebase';
import {doc,setDoc} from 'firebase/firestore'  
import { toast } from 'react-toastify';

function Signup() {
let navigate=useNavigate();

let [data,setData]=useState({name:"",email:"",password:"",cpassword:""})

let value,name;
let handelChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    // extra dydefault field addd below
    setData({...data,[name]:value});
      }
  //  console.log(data)
 
 let handelsignup= async(e)=>{
   try{ 
   e.preventDefault();
   if(data.password!==data.cpassword){
    throw new Error('not valdi password');
   }
    await createUserWithEmailAndPassword(auth,data.email,data.password);
let user=auth.currentUser;
console.log('user',user)
if(user){
  // for create collection
  await setDoc(doc(db,"user",user.uid),{
    email:data.email,
    name:data.name
  })
}
toast.success('signup successfull',{position:'top-center'});
navigate('/')
}
   
 catch(e){
   navigate('/signup')
 
   toast.error('signup not successfull', );
  }
}

 
 return (
    <center className='mt-[5vw] mx-[10vw] md:mx-[25vw] lg:mx-[30vw] px-3 py-4 shadow-2xl rounded-lg'>
        <form method='POST' action='/signup' onSubmit={handelsignup} className='flex   flex-col px-3 py-4'>
 {/* <img src={data.profilepic || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrGPJ2q7Abf54iQOe8H_w11p07aS1mN11YXa9AJTfO3i_mPSSu3P5sR-VGxruGswg5s8&usqp=CAU' } className='text-center w-[7vw] h-[7vw] rounded-full self-center' name='profilepic' alt=""  value={data.profilepic} onChange={handelUplodPic}/> */}
  {/* <input type="file" accept="image/*"  className='text-center w-[7vw] h-[7vw] rounded-full self-center' name='profilepic'    onChange={handleUploadPic} /> */}
 <h1 className='text-center text-[4.5vw] md:text-[3.2vw] font-bold'>SIGN UP</h1>
  <label htmlFor="" className='text-start'>Name:</label>
<input type='text' required name='name' alt="" className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' value={data.name} onChange={handelChange}/>
 <label htmlFor="" className='text-start  '>Email:</label>

<input type='email' required name='email' alt="" className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' value={data.email} onChange={handelChange}/>
 <label htmlFor="" className='text-start '>Password:</label>

<input type='password' required className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' name='password' alt=""  value={data.password} onChange={handelChange}/>
 
  <label htmlFor="" className='text-start '>ConfirmPassword:</label>

<input  type='password' required name='cpassword' alt="" className='py-[.5vw] mb-3 border-[.5px] border-black  rounded-lg'  value={data.cpassword} onChange={handelChange}/>
 <button type='submit' className='rounded-full text-center self-center px-3 my-3 py-1 bg-red-500 text-white'>SignUp</button>
    <div className='flex items-center mb-2 justify-end'> 
     <a className='font-semibold text-[.7rem] '>Already have Accout?</a>
     <Link to='/login' className='text-blue-600 text-[.7rem] '>Login</Link> 
      </div> 

        </form>
     </center>
  )
}

export default Signup