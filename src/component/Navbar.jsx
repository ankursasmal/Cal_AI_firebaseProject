import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { auth,db } from '../firebase/firebase';
import { toast } from 'react-toastify';
import { doc,getDoc } from 'firebase/firestore';   

function Navbar() {
  let navigate=useNavigate();
       let [existUser,setExistUser]=useState(null);

      //  fetch data for hendel navber
  let fetchUserDetail=async()=>{
    try{
        auth.onAuthStateChanged(async(user)=>{
          // console.log("user",user);
            const docRef = doc(db, "user", user.uid);
            const Data = await getDoc(docRef);
             if(Data.exists) {
                  console.log('data', Data.data());
                setExistUser(Data.data());
              } 
else{
console.log('user is not login');
}
        })

    }
    catch(e){
console.log('data not fetch')
    }
}

useEffect(()=>{
fetchUserDetail();
},[]) 

// for logout
const handleLogout = async (e) => {
  try {
    e.preventDefault();

    await auth.signOut();
    toast.success('Logout successful', { position: 'top-center' });
    navigate('/');
 setExistUser(null);
  } catch (e) {
    toast.error('Logout not successful');
  }
};




  return (
    <div className='flex items-center justify-between w-[100vw] h-[68px] shadow-md bg-slate-200 px-4'>
     
       <NavLink style={({ isActive, isPending }) => {
    return {
      color: isActive ? "blue" : "inherit",
    };
  }}
  className={({ isActive, isPending }) => {
    return isActive ? "active" : isPending ? "pending" : "";
  }} to='/'> <span className='font-bold'>Home</span></NavLink>



      <div className='flex items-center gap-2'>
{/* if not signup then */}

     {!existUser?.email? 
     <div className='flex items-center gap-2'> 
     <NavLink
  style={({ isActive, isPending }) => {
    return {
      color: isActive ? "blue" : "inherit",
    };
  }}
  className={({ isActive, isPending }) => {
    return isActive ? "active" : isPending ? "pending" : "";
  }} to='/login' >Login
</NavLink>

<NavLink
  style={({ isActive, isPending }) => {
    return {
      color: isActive ? "blue" : "inherit",
    };
  }}
  className={({ isActive, isPending }) => {
    return isActive ? "active" : isPending ? "pending" : "";
  }} to='/signup' >SignUp</NavLink>
  </div>
: null}
       
  
       <NavLink
  style={({ isActive, isPending }) => {
    return {
      color: isActive ? "blue" : "inherit",
    };
  }}
  className={({ isActive, isPending }) => {
    return isActive ? "active" : isPending ? "pending" : "";
  }} to='/pay' >Payment</NavLink>
    
   
    
    
       {/* onclick logout */}
    {existUser?.email?  <button type='submit' className='outline-none border-none' onClick={handleLogout} >Logout</button>:null}
 </div>
 </div>
  )
}

export default Navbar
