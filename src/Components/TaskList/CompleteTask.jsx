import React from 'react'

const CompleteTask = ({data}) => {
  return (
     <div className='flex-shrink-0 h-full w-[400px] bg-red-400 rounded-xl px-3 py-3  '>
        <div className='flex justify-between'>
            <h3 className='mt-0.2 bg-red-900 text-xl rounded  font-medium  text-white px-2 py-1 '>{data.category}</h3>
            <h2 className='mt-1 text-lg  font-light '>{data.taskDate}</h2>
        </div>
        <h2 className='text-2xl font-bold  mt-2 px-0.5 underline italic '>{data.taskTitle}</h2>
        <p className='text-shadow-emerald-50  mt-5  '>{data.taskDescription}</p>
     <div className=' mt-12 flex  justify-between px-4 '>
      <button className='bg-pink-500  px-2.5 py-1.5 rounded hover:bg-pink-600  w-full'>Task Completed</button>
     </div>
    </div>
  )
}

export default CompleteTask
