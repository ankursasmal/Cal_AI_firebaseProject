import React, { useEffect, useState } from 'react'
import { auth,db } from '../firebase/firebase';
import {doc,getDoc} from 'firebase/firestore'  
import StripePayment from './StripePayment';
import PayPalPayment from './PayPalPayment';

function Payment() {
    let [existUser,setExistUser]=useState(null);
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


  return (
    <div className='flex items-center justify-center md:justify-between'>
    {/* frist col for detail */}

    <div className='w-[80%] md:w-[30%]  '>
      <div className='flex flex-col items-start p-4 shadow-lg rounded-lg m-4 bg-[#2d2f31]'> 
    <a className='text-[1rem] font-semibold text-blue-400'>Name:<span className='text-[.8rem]'>{existUser?.name}</span></a>
    <a className='text-[1rem] font-semibold text-blue-400 mt-2'>Email:<span className='text-[.8rem]'>{existUser?.email}</span></a>
    </div>
    </div>

        {/* 2nd col for detail */}

    <div className='w-[80%] md:w-[70%] mx-10'>
    <div>
      <h1>Payment Gateway UI</h1>
      
      <section>
        <h2>Stripe Payment</h2>
        <StripePayment />
      </section>
      
      <section>
        <h2>PayPal Payment</h2>
        <PayPalPayment />
      </section>
    </div>
    </div>
    </div>
  )
}

export default Payment
