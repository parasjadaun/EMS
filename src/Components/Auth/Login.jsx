import React, { useState } from 'react'

const Login = () => {
const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const SumbitHandler=(e)=>{
    e.preventDefault()
    setEmail("")
    setPassword("")
  }
  return (
    <div className=' h-screen w-screen flex justify-center items-center  bg-black'>

      <div className='border-2  border-emerald-500 rounded-2xl  ' >

     <form className='flex flex-col items-center justify-center m-24' onSubmit={(e)=>{
      SumbitHandler(e);
     }}>

        <input required value={email}
        onChange={(e) => setEmail(e.target.value)
        } className='border-2 rounded-2xl text-xl p-2 border-emerald-500 outline-none placeholder-emerald-300
         text-amber-50 m-3 w-full ' type="email" placeholder='Enter Your Email' />

     <input required value={password}
        onChange={(e) => setPassword(e.target.value)
        } className='outline-none border-2 rounded-2xl text-xl p-2
      border-emerald-500 placeholder-emerald-300 text-amber-50 stroke-white m-3 w-full' type="password" placeholder='Enter the Passowrd' />

     <button  className='border-2 rounded-2xl text-xl px-6 py-2 text-amber-50 cursor-pointer
      bg-emerald-500  m-5 w-full' >Login</button>

     </form>
    </div>
    </div>
  )
}

export default Login
