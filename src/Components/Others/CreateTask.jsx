import React, { useState } from 'react'

const CreateTask = () => {
 
 
const [taskTittle, SetTaskTittle] = useState('')
const [date, SetDate] = useState('')
const [asignTo, SetasignTo] = useState('')
const [category, setCategory] = useState('')
const [descreption, setDescreption] = useState('')
 const SumbitHandler = (e) => {
  e.preventDefault()
  console.log("Form submitted")
  console.log(taskTittle)
  console.log(date)
  console.log(asignTo)
  console.log(category)
    console.log(descreption)
    SetTaskTittle('')
        SetDate('')
      SetasignTo('')
            setCategory('')
            setDescreption('')
}


  return (
    <div>
        <form onSubmit={(e) => {
     SumbitHandler(e);
       }}
       className="mt-7 flex w-full flex-col gap-6 rounded bg-[#1c1c1c] p-4 font-medium sm:p-7 lg:flex-row lg:gap-10">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          
          {/* Task Title */}
          <div>
            <h1 className="mb-2 text-amber-50">
              Task Title
            </h1>

            <input 
            value={taskTittle}
            onChange={(e)=>{
          SetTaskTittle(e.target.value)
            }}
              type="text"
              placeholder="Make a UI Design"
              className="w-full rounded border-2 border-amber-100 bg-transparent p-2 text-amber-50 outline-none placeholder:text-gray-400 focus:border-emerald-500"
            />
          </div>

          {/* Date */}
          <div className="mt-4">
            <h1 className="mb-2 text-amber-50">
              Date
            </h1>

            <input
             value={date}
            onChange={(e)=>{
          SetDate(e.target.value)
            }}
              type="date"
              className="w-full rounded border-2 border-amber-100 bg-transparent p-2 text-amber-50 outline-none focus:border-emerald-500"
            />
          </div>

          {/* Assign To */}
          <div className="mt-4">
            <h1 className="mb-2 text-amber-50">
              Assign To
            </h1>

            <input
             value={asignTo}
            onChange={(e)=>{
          SetasignTo(e.target.value)
            }}
              type="text"
              placeholder="Employee Name"
              className="w-full rounded border-2 border-amber-100 bg-transparent p-2 text-amber-50 outline-none placeholder:text-gray-400 focus:border-emerald-500"
            />
          </div>

          {/* Category */}
          <div className="mt-4">
            <h1 className="mb-2 text-amber-50">
              Category
            </h1>

            <input
             value={category}
            onChange={(e)=>{
          setCategory(e.target.value)
            }}
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full rounded border-2 border-amber-100 bg-transparent p-2 text-amber-50 outline-none placeholder:text-gray-400 focus:border-emerald-500"
            />
          </div>

        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          
          {/* Description */}
          <div>
            <h1 className="mb-2 text-amber-50">
              Description
            </h1>

            <textarea
             value={descreption}
            onChange={(e)=>{
          setDescreption(e.target.value)
            }}
              placeholder="Describe the task..."
              className="h-40 w-full resize-none rounded border-2 border-amber-100 bg-transparent p-2 text-amber-50 outline-none placeholder:text-gray-400 focus:border-emerald-500"
            />
          </div>

          {/* Button */}
          <button
            
            className="mt-5 w-full rounded bg-emerald-500 py-2 text-2xl text-white transition hover:bg-emerald-600"
          >
            Create Task
          </button>

        </div>

      </form>
    </div>
  )
}

export default CreateTask
