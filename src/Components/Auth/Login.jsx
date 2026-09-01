import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const SumbitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
  }
  return (
    <div className=' h-screen w-screen flex justify-center items-center  bg-black'>

      <div className='border-2 px-15 py-20  border-emerald-500 rounded-2xl  ' >

    <form
  className="flex flex-col items-center justify-center max-w-md mx-auto"
  onSubmit={(e) => {
    SumbitHandler(e);
  }}
>
  {/* Email */}
  <div className="w-full mb-4">
    <label
      htmlFor="email"
      className="block text-lg font-semibold text-amber-50 mb-2"
    >
      Enter Email
    </label>

    <input
      id="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="border-2 rounded-2xl text-xl p-3 border-emerald-500
                 outline-none placeholder-emerald-300 text-amber-50
                 w-full bg-transparent focus:border-emerald-400"
      type="email"
      placeholder="Enter Your Email"
    />
  </div>

  {/* Password */}
  <div className="w-full mb-4">
    <label
      htmlFor="password"
      className="block text-lg font-semibold text-amber-50 mb-2"
    >
      Enter Password
    </label>

    <input
      id="password"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="border-2 rounded-2xl text-xl p-3 border-emerald-500
                 outline-none placeholder-emerald-300 text-amber-50
                 w-full bg-transparent focus:border-emerald-400"
      type="password"
      placeholder="Enter Your Password"
    />
  </div>

  {/* Login Button */}
  <button
    type="submit"
    className="border-2 border-emerald-500 rounded-2xl text-xl
               px-6 py-3 text-amber-50 cursor-pointer
               bg-emerald-500 hover:bg-emerald-600
               transition duration-200 w-full mt-3"
  >
    Login
  </button>
</form>
    </div>
    </div>
  )
}

export default Login
