import React, { useContext } from 'react'
import Login from './Components/Auth/Login'
import EmployDashBoard from './Components/DashBoard/EmployDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const { employees, admin, loggedInUser, setLoggedInUser } = useContext(AuthContext)


  const handleLogin = (email, password) => {

    const employee = employees?.find(
      (e) => email === e.email && e.password === password
    )

    const adminUser = admin?.find(
      (a) => email === a.email && a.password === password
    )


    if (adminUser) {
      const session = { role: 'admin', data: adminUser }
      setLoggedInUser(session)
      localStorage.setItem('loggedInUser', JSON.stringify(session))

    }

    else if (employee) {

      const session = { role: 'employee', data: employee }
      setLoggedInUser(session)
      localStorage.setItem('loggedInUser', JSON.stringify(session))

    }

    else {

      alert('Invalid Credentials')

    }
  }


  return (
    <>
      {
        !loggedInUser
          ? <Login handleLogin={handleLogin} />
          : loggedInUser.role === 'admin'
            ? <AdminDashBoard />
            : loggedInUser.role === 'employee'
              ? <EmployDashBoard />
              : null
      }
    </>
  )
}

export default App
