// let a = prompt("what is your employee id :")

// alert("your id is :"+ a)
// let b = prompt("what is name :")

// alert("your name is : "+ b)
// let c = prompt("what is your salary :")

// alert("your salary is : "+ c)

// letemployee_id = document.getElementById("e_id").value;
// letemployee_name = document.getElementById("e_name").value;
// letemployee_salary = document.getElementById("e_salary").value;

var myObj = {};

function addEmployee() {
  let employeeId = document.getElementById("e_id").value;
  let employeeName = document.getElementById("e_name").value;
  let employeeSalary = document.getElementById("e_salary").value;

  //   var myObject = {
  //     emp_id : employeeId,
  //     emp_name : employeeName,
  //     emp_salary : employeeSalary
  //   };

  
  if (employeeId && employeeName && employeeSalary) {
    if (!myObj[employeeId]) {
      addRowToTable(employeeId,employeeName,employeeSalary);

      myObj[employeeId] = true;

      clearFormData();
    } else {
      alert("Employee ID already exists");
    }
  } else {
    alert("Details are mandatory");
  }
}

function addRowToTable(employeeId,employeeName,employeeSalary) {
  

  // document.getElementById("table1").style.display ="block";
  var table = document.getElementById("table1");

  var row = table.insertRow();

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = employeeId;
  cell2.innerHTML = employeeName;
  cell3.innerHTML = employeeSalary;

  // cell4.innerHTML = `<button onclick="removeEmployee()">remove</button>`;

  var removeButton = document.createElement("button");
  removeButton.style.backgroundColor = "red";
  removeButton.textContent = "Remove";
  removeButton.onclick = function () {
    // Remove the associated row when the button is clicked
    removeEmployee(employeeId, row);
  };

  // Append the button to the row
  cell4.appendChild(removeButton);
}

function removeEmployee(employeeId, row) {
  delete myObj[employeeId];
  document.getElementById("table1").deleteRow(row.rowIndex);
}

function clearFormData(){
  document.getElementById("e_id").value = "";
  document.getElementById("e_name").value = "";
  document.getElementById("e_salary").value = "";
}



function searchEmployee() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table1");
  tr = table.getElementsByTagName("tr");
 
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      let tdata = td[j];
      if (tdata) {
        if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}