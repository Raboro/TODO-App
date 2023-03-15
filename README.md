# Kanban - Web Engineering I Project

> ## Authors:
> [Manuel Franz](https://github.com/Manuel-F-04),  [Janik Piehler](https://github.com/janikpiehler), [Lukas Schulz](https://github.com/lukas-ms), [Marius Wörfel](https://github.com/Raboro)

## Instruction guide
1. Install [node.js](https://nodejs.org/en/download/)
2. Clone code 
3. Add a ```.env``` file, which contains all "secret data" about the server connection etc.
4. After collecting the sourcecode load all dependencies with:

```bash 
$ npm install
```
5. To run the code / Server:

```bash
$ npm run dev
```

## Project structure

>├── .github/ <br>
│   ├── workflows/ <br>
├── node_modules/ <br>
├── src/ <br>
│   ├── controllers/ <br>
│   ├── middleware/ <br>
│   ├── public/ <br>
│   ├── routes/ <br>
│   ├── services/ <br>
│   ├── sql/ <br>
│   └── app.js <br>
├── .env <br>
├── .eslintrc.json <br>
├── .gitignore <br>
├── package.json <br> 
├── package-lock.json <br>
└── README.md 

---
## Technical Report
### Major contribution of each team member

#### Manuel Franz:
- Database: set up, commands
- Backend: database commands integration
- Frontend: SignIn-page and SignUp-page


#### Janik Piehler:
- Frontend: SignIn-page and SignUp-page, main page, draggable add task window
- loading tasks when logging in


#### Lukas Schulz:
- Frontend: add/edit Task window, drag and drop function for all tasks, design
- Frontend Backend connection for edit and delete buttons
- Database hosting


#### Marius Wörfel:
- Backend: routing, structure, dependencies, setup
- Frontend: add/delete/edit functionality

### Introduction of the website – what is it for?

Kanban is a website designed to help individuals and teams organize their work using the Kanban methodology. 
Kanban is a lean approach to project management that originated in the Toyota Production System 
and is now widely adopted across various industries. 
The Kanban website is specifically designed to simplify and streamline task management, 
making it easy for users to visualize their workflow, prioritize tasks, and track progress. 
The Kanban project offers a user-friendly interface that allows users to create and manage task cards, 
which represent individual work items. 
The application's intuitive drag-and-drop functionality makes it easy to move cards 
between columns that represent different stages of the workflow, from "To Do" to "In Progress" to "Done." 
Users can also add due dates and work simultaneously with different devices on one Kanban board.

### Structure of the website, i.e., navigation/routing structure

The Application contains three pages. Sign in, sign up and the main page. <br>
All the routes can be assigned to one of them:

- /signIn, GET, gives access to the signIn.html page
- /signUp, GET, gives access to the signUp.html page
- /mainPage, GET gives access to the todo.html page
- /user/signIn, POST,  user sends his login data and if valid gets his JWT token for authentication
- /user/signUp, POST, user sends his user data, which are after validation added to the database and also gets his JWT token for authentication
- /user/logout, GET, token gets removed
- /task/getAllTasks, GET, fetching and sending all tasks, grouped by category
- /task/addTask, POST, getting all task data and adding to the database. Also returning ID of task to frontend
- /task/deleteTask, POST, deleting task by using the sent ID as reference
- /changeCategoryOfTask, POST, changing category of task by ID (used for drag and drop feature)

Everything related to tasks and user logout are located in the main page. 
The others are related to user sign in or up.

To authenticate the user a JWT token is generated, which is user unique. 
This token gets destroyed if the user logs out or closes the browser. 
If there is no valid token, the user gets redirected to sign in.

### Abstract layout of the Web pages

The sign In and sign up pages are built with a simple div that contains the heading, 
labels for user input and a submit button. The main page is built with flexbox, 
containing three items, each representing a category. Each category contains a heading, 
a button to add tasks and a grid, which contains the tasks. Every task has a heading, date, 
content and two buttons for edit and delete.

### Key functions implemented by the back-end program

The application uses a database. This makes it possible to access the entered data despite a server restart.
The database stores the different users and their tasks, which are needed for the website. 
For example, during login and registration, the user data is accessed, which is uniquely identified by the e-mail address.
When the main page is loaded, the corresponding tasks are loaded, which are unique by an individual ID. 
In case of additional interaction on the main page, 
the task data are directly adjusted in the database in order to have them available again for the next login.

### How the MVC pattern is applied?

The application is build with the popular Node.js web application framework Express.
Express implements the following folder structure:

- Source:
  - controllers
  - middleware
  - public
  - routes
  - services
  - (sql used to store the database queries and table setup as backup)

The application does not use a views folder because our static html elements are placed in the public folder.

### Tech stacks:

- Frontend:
  - HTML
  - CSS
  - JavaScript

- Backend:
  - JavaScript
  - Node.js
  - Express
  
  - Various dependencies:
    - chalk
    - cookie-parser
    - dotenv
    - jsonwebtoken
    - nodemon
    - mysql2
  
- GitHub action to check JavaScript code styling with ESLint automatically on push
ESLinter to check Javascript code styling with standard configuration and 4 override rules
  
- mySQL database hosted by [Hostinger](https://www.hostinger.de/?ppc_campaign=google_search_brand&bidkw=hostinger)
- .env file to store secret info e.g. database password (only locally not in git)

### Any highlights of the design/implementation?

- One account can use the Kanban board on different devices at the same time because of the async backend structure
- Remote database
- Responsive design
- Drag and Drop function for all tasks
- Movable AddTask window
- Error handling for Sign in and Sign up
- Detect and visualize overdue tasks
- Horizontal scrolling through tasks on mobile devices
- User authentication and security via JWT
