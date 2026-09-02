const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 3,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize queries for better performance",
        taskDate: "2026-09-02",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design new feature",
        taskDescription: "Create mockups for the new feature",
        taskDate: "2026-09-03",
        category: "Design"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",

    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Create the employee dashboard",
        taskDate: "2026-09-02",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate the employee API",
        taskDate: "2026-09-04",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Set up the project database",
        taskDate: "2026-09-01",
        category: "Database"
      }
    ]
  },

  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",

    taskCounts: {
      active: 1,
      newTask: 3,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Design and implement the landing page",
        taskDate: "2026-09-05",
        category: "Frontend"
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 4,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Authentication",
        taskDescription: "Fix authentication and login issues",
        taskDate: "2026-09-03",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the application functionality",
        taskDate: "2026-09-01",
        category: "Testing"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    firstName: "Rahul",
    email: "admin@example.com",
    password: "123"
  }
];
export const setLocalStrorage=()=>{
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees",JSON.stringify(employees))
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin",JSON.stringify(admin))
  }

}
export const getLocalStrorage=()=>{
const employees = JSON.parse(localStorage.getItem("employees"))
const admin = JSON.parse(localStorage.getItem("admin"))
       return{employees,admin}
}
