import React, { useContext } from 'react'
import { AuthContext } from './../../Context/AuthProvider';

const AllTask = () => {
  const authData=useContext(AuthContext)
  return (
  <div className='mt-5'>
       <div className='rounded bg-[#1c1c1c] p-3 sm:p-5'>
    <div className='overflow-x-auto'>
      <div className='min-w-[760px]'>
     <div className='mb-1 grid grid-cols-4 bg-red-400 gap-4 px-4 py-2 text-base text-amber-50 sm:text-lg'>
        <h2 className='font-bold' >Employee Name</h2>
        <h3 className='font-bold text-blue-600'>Active Task</h3>
        <h5 className='font-bold text-green-600'>Completed Task</h5>
        <h2 className='font-bold text-red-600'>Failed Task</h2>
        </div>
    <div className='h-48 overflow-y-auto px-2'>
      { authData.employees.map((employee)=>{        
return( <div key={employee.email} className='mb-2 grid grid-cols-4 gap-4 border-2 rounded bg-transperent border-sky-200 px-5 py-2 text-base text-amber-50 sm:text-lg'>
        <h2 className='font-semibold ' >{employee.firstName}</h2>
        <h3 className='font-bold text-blue-600'>{employee.taskCounts.active}</h3>
        <h5 className='font-bold text-green-600'>{employee.taskCounts.completed}</h5>
        <h2 className='font-bold text-red-600'>{employee.taskCounts.failed}</h2>
      </div>)
    })}
    </div>
    </div>
    </div>
    </div>
  </div>
  )
}

export default AllTask
