import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex items-center flex-col justify-center h-[90vh]'>
      <h1 className='text-[3.2vw] md:text-[2.5vw] font-semibold text-red-400'>Opps Page not found </h1>
      <Link to='/' className='mt-4'><button className='px-[6px] py-[2px] rounded-lg font-[1rem] bg-blue-500 text-white'>Go to Home</button> </Link>
    </div>
  )
}

export default ErrorPage
