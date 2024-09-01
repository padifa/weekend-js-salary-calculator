document.addEventListener("DOMContentLoaded", onReady, false);

function onReady() {
  console.log("DOM is here!");

  document.querySelector("form").addEventListener("submit", submitValue);
}

const employees = [];
let totalMonthly = 0;
let totalAnnually = 0;

function submitValue(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const id = document.getElementById("id").value;
  const title = document.getElementById("title").value;
  const salary = parseFloat(document.getElementById("salary").value);

  if (!firstName || !lastName || !id || !title || isNaN(salary)) {
    alert("All fields are required.");
    return;
  }
  AddEmployee(firstName, lastName, id, salary, title);
  const tbody = document.getElementById("tbody-id");
  const tdata = document.createElement("tr");
  tdata.classList.add("tdata");
  tbody.appendChild(tdata);

  tdata.innerHTML = `  <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${salary.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}</td>
        <td><button onClick="removeRow(event)">Delete</button></td>`;

  updateTotalMonthly();
}

function AddEmployee(firstName, lastName, id, salary, title) {
  const newEmployee = {
    firstName,
    lastName,
    id,
    salary,
    title,
  };
  employees.push(newEmployee);
}

function removeRow(event) {
  const row = event.target.closest(".tdata");
  const id = row.children[2].textContent;
  const index = employees.findIndex((emp) => emp.id === id);
  if (index !== -1) {
    employees.splice(index, 1);
  }
  row.remove();
  updateTotalMonthly();
}

function updateTotalMonthly() {
  let totalAnnually = employees.reduce((sum, emp) => sum + emp.salary, 0);
  let totalMonthly = totalAnnually / 12;

  document.getElementById("tMonthly").innerText = totalMonthly.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  );
}
