import React from 'react'

const Header = () => {
  return (
   <div className=''>
     <div className='flex justify-between '>
     <h1 className='font-semibold text-white'>Hello,<br /><span className='text-3xl font-bold '>Paras👋</span></h1>
     <button className='bg-red-500 border-2 cursor-pointer border-amber-950 px-5  py-1 text-xl font-bold rounded-lg  text-amber-50  '>Log Out</button>
    </div>
   </div>
  )
}

export default Header
