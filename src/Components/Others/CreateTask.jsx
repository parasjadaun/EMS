import React from 'react'

const CreateTask = () => {
  return (
    <div className="flex-1">
      <form className="mt-7 flex w-full gap-10 rounded bg-[#1c1c1c] p-7 font-medium">
        
        {/* Left Section */}
        <div className="w-1/2">
          
          {/* Task Title */}
          <div>
            <h1 className="mb-2 text-amber-50">
              Task Title
            </h1>

            <input
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
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full rounded border-2 border-amber-100 bg-transparent p-2 text-amber-50 outline-none placeholder:text-gray-400 focus:border-emerald-500"
            />
          </div>

        </div>

        {/* Right Section */}
        <div className="w-1/2">
          
          {/* Description */}
          <div>
            <h1 className="mb-2 text-amber-50">
              Description
            </h1>

            <textarea
              placeholder="Describe the task..."
              className="h-40 w-full resize-none rounded border-2 border-amber-100 bg-transparent p-2 text-amber-50 outline-none placeholder:text-gray-400 focus:border-emerald-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
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
