import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const TaskListNumbers = () => {
     const { loggedInUser } = useContext(AuthContext)
     const taskCounts = loggedInUser?.data?.taskCounts

     if (!taskCounts) return null

  return (
    <div className='flex gap-5  mt-10 justify-between screen'>
      <div className='rounded-xl  px-9 py-6  w-[45%] bg-red-400 hover:bg-amber-700'>
        <h2 className='text-3xl font-semibold'>{taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>
      <div className='rounded-xl  px-9 py-6  w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className='rounded-xl  px-4 py-6  w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{taskCounts.completed}</h2>
        <h3 className='text-lg font-medium'>Completed Tasks</h3>
      </div>
      <div className='rounded-xl  px-9 py-6  w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
