import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployDashBoard from './Components/DashBoard/EmployDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'
import { getLocalStrorage, setLocalStrorage } from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  // useEffect(() => {
  //  setLocalStrorage()
  //  getLocalStrorage()
  // })
  
  const authdata=useContext(AuthContext)
const [user, setUser] = useState(null)
useEffect(() => {
  setLocalStrorage()
}, [])

useEffect(() => {
  const role = localStorage.getItem('role')

  if (role) {
    setUser(role)
  }
}, [])

  
 const handleLogin=(email,password)=>{
  const employee=authdata&&authdata.employees.find((e)=>email==e.email&& password==e.password)
 if(email=='admin.me@gmail.com'&& password=='123'){
   localStorage.setItem('role','admin')
    setUser('admin')
}
else if(employee){
    localStorage.setItem('role','employee')
  setUser('employee')
}
else{
  alert("Enter Valid Email & PassWord")
}
}

  return (
    <div>
     <>
    {!user?<Login handleLogin={handleLogin} />:''}
    {user=='admin'?<AdminDashBoard/>:user=='employee'?<EmployDashBoard/>:''}
     {/* <EmployDashBoard/> */}
     {/* <AdminDashBoard/> */}
     </>
    </div>
  )
}

export default App
