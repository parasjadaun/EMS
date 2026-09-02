import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployDashBoard from './Components/DashBoard/EmployDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'
import { setLocalStrorage } from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {  
  const authdata=useContext(AuthContext)
const [user, setUser] = useState(null)
useEffect(() => {
  setLocalStrorage()
  const savedUser = localStorage.getItem('user')

  if (savedUser) {
    setUser(JSON.parse(savedUser))
  }
}, [])

  
 const handleLogin = (email, password) => {

 const employee = authdata?.employees.find(
    (e) => e.email === email && e.password === password
  )

  const admin = authdata?.admin.find(
    (a) => a.email === email && a.password === password
  )

  if (admin) {
    const adminUser = { role: 'admin', admin }
    localStorage.setItem('user', JSON.stringify(adminUser))
    setUser(adminUser)
  }
  else if (employee) {
    const employeeUser = { role: 'employee', employee }
    localStorage.setItem('user', JSON.stringify(employeeUser))
    setUser(employeeUser)
  }
  else {
    alert("Enter Valid Email & Password")
  }
}
  if (!user) {
    return <Login handleLogin={handleLogin} />
  }

  if (user.role === 'admin') {
    return <AdminDashBoard data={user.admin} />
  }

  return <EmployDashBoard data={user.employee} />
}

export default App
