document.addEventListener("DOMContentLoaded", onReady, false);

function onReady() {
    console.log('DOM is here!');
    
    // Add event listener to the form's submit event
    document.querySelector('form').addEventListener('submit', submitValue);
}

const employees = []; 
let totalMonthly = 0;
let totalAnnually = 0;

function submitValue(event) {
    event.preventDefault(); // Prevent the default form submission

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById("lastName").value;
    const id = document.getElementById("id").value;
    const title = document.getElementById("title").value;
    const salary = parseFloat(document.getElementById("salary").value); // Ensure salary is a number

    if (!firstName || !lastName || !id || !title || isNaN(salary)) {
      alert("All fields are required.");
      return;
  }
    ist.add('tdata');
    tbody.appendChild(tdata);
    
    tdata.innerHTML = 
    `  <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
        <td><button onClick="removeRow(event)">Delete</button></td>`;
    
    updateTotalMonthly(); // Update total monthly salary
}

function AddEmployee(firstName, lastName, id, salary, title) {
    const newEmployee = {
        firstName,
        lastName,
        id,
        salary,
        title
    }; 
    employees.push(newEmployee);
}

function removeRow(event) {
    // Find the employee by ID and remove them from the employees array
    const row = event.target.closest('.tdata');
    const id = row.children[2].textContent;
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
    }
    row.remove();
    updateTotalMonthly(); // Update total monthly salary after removing an employee
}

function updateTotalMonthly() {
    let totalAnnually = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let totalMonthly = totalAnnually / 12;

    document.getElementById("tMonthly").innerText = totalMonthly.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}