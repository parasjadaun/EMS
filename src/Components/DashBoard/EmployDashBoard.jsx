import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployDashBoard = ({data}) => {
  return (
    <div className='h-screen p-10 w-screen bg-[#1C1C1C] text-amber-50 '>
      <Header data={data}/>
    <TaskListNumbers data={data}/>
    <TaskList data={data}/>
    </div>
  )
}

export default EmployDashBoard
