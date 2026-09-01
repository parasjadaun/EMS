const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page for the application.",
        taskDate: "2026-09-02",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Fix the responsive navigation bar on mobile devices.",
        taskDate: "2026-09-03",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create User API",
        taskDescription: "Create an API endpoint for fetching user information.",
        taskDate: "2026-08-30",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Create the main dashboard UI for employees.",
        taskDate: "2026-09-02",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Search Feature",
        taskDescription: "Implement search functionality for employee records.",
        taskDate: "2026-09-04",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update project documentation with the latest changes.",
        taskDate: "2026-08-29",
        category: "Documentation"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Form",
        taskDescription: "Build a form for adding new employees.",
        taskDate: "2026-09-03",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Authentication",
        taskDescription: "Test employee and admin authentication functionality.",
        taskDate: "2026-09-04",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project",
        taskDescription: "Initialize the project and configure dependencies.",
        taskDate: "2026-08-28",
        category: "Setup"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Card",
        taskDescription: "Design and implement the task card component.",
        taskDate: "2026-09-02",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Button Styling",
        taskDescription: "Fix inconsistent button styles across the application.",
        taskDate: "2026-09-03",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Create a responsive footer for the application.",
        taskDate: "2026-08-27",
        category: "Frontend"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Admin Panel",
        taskDescription: "Create the basic admin panel interface.",
        taskDate: "2026-09-05",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Review Code",
        taskDescription: "Review the latest code and identify potential issues.",
        taskDate: "2026-09-04",
        category: "Review"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the application to the production server.",
        taskDate: "2026-08-31",
        category: "Deployment"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStrorage=()=>{
  localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))

}
export const getLocalStrorage=()=>{
const employees = JSON.parse(localStorage.getItem("employees"))
const admin = JSON.parse(localStorage.getItem("admin"))
       return{employees,admin}
}
