import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const Header = () => {

const logOutUser=()=>{
  localStorage.removeItem('loggedInUser')
  setLoggedInUser(null)
}
     const { loggedInUser, setLoggedInUser } = useContext(AuthContext)
     const data = loggedInUser?.data
  return (
  
   <div>
     <div className='flex flex-wrap items-start justify-between gap-4'>
     <h1 className='font-semibold text-white'>Hello,<br /><span className='text-3xl font-bold '>👋{data?.firstName ?? 'Admin'}</span></h1>
     <button onClick={logOutUser}
      className='cursor-pointer rounded-lg border-2 border-amber-950 bg-red-500 px-5 py-1 text-xl font-bold text-amber-50'>Log Out</button>
    </div>
   </div>
  )
}

export default Header
