import React from 'react'
import Login from './Components/Auth/Login'
import EmployDashBoard from './Components/DashBoard/EmployDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'

const App = () => {
  return (
    <div >
     <>
     {/* <Login/> */}
     <EmployDashBoard/>
     {/* <AdminDashBoard/> */}
     </>
    </div>
  )
}

export default App
