const myObj1: { [key: string]: boolean } = {};

function addEmployee() {
  const employeeIdInput = document.getElementById("e_id") as HTMLInputElement | null;
  const employeeNameInput = document.getElementById("e_name") as HTMLInputElement | null;
  const employeeSalaryInput = document.getElementById("e_salary") as HTMLInputElement | null;

  if (employeeIdInput && employeeNameInput && employeeSalaryInput) {
    const employeeId: string = employeeIdInput.value;
    const employeeName: string = employeeNameInput.value;
    const employeeSalary: string = employeeSalaryInput.value;

    if (employeeId && employeeName && employeeSalary) {
      if (!myObj1[employeeId]) {
        addRowToTable(employeeId, employeeName, employeeSalary);
        myObj1[employeeId] = true;
        clearFormData();
      } else {
        alert("Employee ID already exists");
      }
    } else {
      alert("Details are mandatory");
    }
  }
}

function addRowToTable(employeeId: string, employeeName: string, employeeSalary: string) {
  const table = document.getElementById("table1") as HTMLTableElement;

  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);

  cell1.innerHTML = employeeId;
  cell2.innerHTML = employeeName;
  cell3.innerHTML = employeeSalary;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.onclick = function () {
    removeEmployee(employeeId, row);
  };

  cell4.appendChild(removeButton);
}

function removeEmployee(employeeId: string, row: HTMLTableRowElement) {
  delete myObj1[employeeId];
  const table = document.getElementById("table1") as HTMLTableElement;
  table.deleteRow(row.rowIndex);
}

function clearFormData() {
  (document.getElementById("e_id") as HTMLInputElement).value = "";
  (document.getElementById("e_name") as HTMLInputElement).value = "";
  (document.getElementById("e_salary") as HTMLInputElement).value = "";
}
