# Salary Calculator


This project is about creating Salary Calculator that allows users to add employee information, use their annual salary get their monthly salary, and manage the list of employees.

# Properties

Add Employee: Users can add an employee's first name, last name, ID, job title, and annual salary.
Show Employee List: each employee's information are displayed in a table row.
Delete Employee:  employees can be removed from the list.
Monthly Salary Calculation: Users can calculate and show the total monthly salary of all the employees.

# Project Structure

salary-calculator/

│
├── index.html      # The `HTML` file to design the page structure
├── style.css       # The `CSS` file to style the page
└── script.js       # The `JavaScript` file to give interactivity to the page 


# Requirement

-`A modern and up to date web browser.`
-`VScode`
-`Github`
-`Git`
-`node.js`

conducting the Project

Use a template from GitHub and name the repository:

cd salary-calculator
Open the project on the web browser by opening index.html in your VScode live server.

# Code Overview

 * `HTML (index.html)`
The HTML file defines the structure of the webpage:

The page contains a 
- Header with the title of the application.
-The body of the page which contains:
     .A form for adding employee details.
     .A table for displaying the list of employees.
     .A section for displaying the total monthly salary.
-Footer

  * `CSS (style.css)`
The CSS file styles the page:

Layout: Used Flexbox for the layout.
colors background colors to color the page

  * `JavaScript (script.js)`
The JavaScript file contains the core logic:

  -Event Handling:

     .The form submission is handled by the submitValue function, which validates the input, adds the employee, and updates the display.

     .The delete button removes an employee and updates the total monthly salary.

 -Employee Management:
     .Employees are stored in an array and displayed in the table.

     .The total monthly salary is calculated based on the sum of all employees' annual salaries.

 -Adding an Employee:

     .Fill out the form with the employee's first name, last name, ID, job title, and annual salary.

     .Click "Submit" to add the employee to the list.

 -Deleting an Employee:

     .Click the "Delete" button next to an employee's entry in the table to remove them from the list.

 -Viewing Monthly Salary:

     .The total monthly salary for all employees is automatically calculated and displayed at the bottom of the page.


This project was conducted by Papa Dienou Faye and is available on his GitHub profile: 
`https://github.com/padifa/weekend-js-salary-calculator`

