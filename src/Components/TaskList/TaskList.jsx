import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../Context/AuthProvider'

const TaskList = () => {  
   const { loggedInUser } = useContext(AuthContext)
   const tasks = loggedInUser?.data?.tasks

   if (!tasks) return null

  return (
    <div id='taskList' className='px-2.5 h-[58%] w-full  overflow-x-auto  mt-10 py-5 flex items-start justify-start gap-7 flex-nowrap text-amber-50 ' >
            {tasks.map((elm, index)=>{
          if(elm?.active){
          return  <AcceptTask key={index} data={elm}/>
          }
        if (elm?.newTask) {
          return    <NewTask key={index} data={elm}/>
        }
       if (elm.completed) {
       return  <CompleteTask key={index} data={elm}/>
       }
  else{
   return  <FailedTask key={index} data={elm}/>
  }
  })}
    </div>
  )
}

export default TaskList
