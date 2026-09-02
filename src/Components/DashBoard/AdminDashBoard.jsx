import React from 'react'
import Header from '../Others/Header'
import CreateTask from './../Others/CreateTask';
import AllTask from '../Others/AllTask';

const AdminDashBoard = ({ data }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black p-4 sm:p-6 lg:p-10">
      <Header data={data} />
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashBoard
