console.log('js');

let annualSalaryTotal = 0;

class Employee {
  constructor(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn, deleteButtonIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;
    this.deleteButton = deleteButtonIn;
  }
}

employeeArray = [];

$(document).ready(readyNow);  //wait for doc to be ready before loading readyNow

function readyNow () {

  //firstName, lastName, idNumber, jobTitle, annualSalary
  $('#submitButton').on('click', submitButtonOnClick);
  $('#employeeTable').on('click', '.deleteEmployeeButton', deleteEmployeeButtonOnClick);
  }//end readyNow


function submitButtonOnClick() {
    console.log('in submitButtonOnClick');
    employeeEntered = new Employee;
    employeeEntered.firstName = $('#firstNameInput').val();
    $('#firstNameInput').val('');
    employeeEntered.lastName = $('#lastNameInput').val();
    $('#lastNameInput').val('');
    employeeEntered.idNumber = $('#idNumberInput').val();
    $('#idNumberInput').val('');
    employeeEntered.jobTitle = $('#jobTitleInput').val();
    $('#jobTitleInput').val('');
    employeeEntered.annualSalary = parseInt($('#annualSalaryInput').val());
    $('#annualSalaryInput').val('');
    employeeEntered.deleteButton = '<button class="deleteEmployeeButton" value="'
                                    + employeeEntered.annualSalary + '">Delete</button>';

    employeeArray.push(employeeEntered);

    $('#employeeTable').append('<tr><td>' + employeeEntered.firstName +
                               '</td><td>' + employeeEntered.lastName +
                               '</td><td>' + employeeEntered.idNumber +
                               '</td><td>' + employeeEntered.jobTitle +
                               '</td><td>' + employeeEntered.annualSalary +
                               '</td><td>' + employeeEntered.deleteButton +
                               '</td></tr>');
    annualSalaryTotal += employeeEntered.annualSalary;
    $('#annualSalaryTotalDisplay').empty();
    $('#annualSalaryTotalDisplay').append('Total Monthly: $' + (annualSalaryTotal/12).toFixed(2));
    if ((annualSalaryTotal/12) > 20000) {
      console.log('monthly total over 20000');
      $('#annualSalaryTotalDisplay').css("background-color", "red");
    }//end annualSalaryTotal if
    console.log(annualSalaryTotal);
}//end submitButtonOnClick

function deleteEmployeeButtonOnClick () {
    console.log('button value this:', $(this));
    $(this).closest('tr').remove();
    let salarySubtract = Number($(this).val());
    annualSalaryTotal -= salarySubtract;
    $('#annualSalaryTotalDisplay').empty();
    $('#annualSalaryTotalDisplay').append('Total Monthly: $' + (annualSalaryTotal/12).toFixed(2));
    if ((annualSalaryTotal/12) <= 20000) {
      console.log('monthly total under 20000');
      $('#annualSalaryTotalDisplay').css("background-color", "white");
    }//end annualSalaryTotal if
}
