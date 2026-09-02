import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {    
  return (
    <div id='taskList' className='px-2.5 h-[58%] w-full  overflow-x-auto  mt-10 py-5 flex items-start justify-start gap-7 flex-nowrap text-amber-50 ' >
            {data.tasks.map((elm, index)=>{
          if(elm?.active){
          return  <AcceptTask key={`${elm.taskTitle}-${index}`} data={elm}/>
          }
        if (elm?.newTask) {
          return    <NewTask key={`${elm.taskTitle}-${index}`} data={elm}/>
        }
       if (elm.completed) {
       return  <CompleteTask key={`${elm.taskTitle}-${index}`} data={elm}/>
       }
  else{
   return  <FailedTask key={`${elm.taskTitle}-${index}`} data={elm}/>
  }
  })}
    </div>
  )
}

export default TaskList
