console.log('js');

class Employee {
  constructor(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;
  }
}

employeeArray = [];

$(document).ready(readyNow);  //wait for doc to be ready before loading readyNow

function readyNow () {

  //firstName, lastName, idNumber, jobTitle, annualSalary
  $('#submitButton').on('click', submitButtonOnClick);
  }//end readyNow


function submitButtonOnClick() {
    console.log('in submitButtonOnClick');
    employeeEntered = new Employee;
    employeeEntered.firstName = $('#firstNameInput').val();
    employeeEntered.lastName = $('#lastNameInput').val();
    employeeEntered.idNumber = $('#idNumberInput').val();
    employeeEntered.jobTitle = $('#jobTitleInput').val();
    employeeEntered.annualSalary = $('#annualSalaryInput').val();
    employeeArray.push(employeeEntered);
    


}//end submitButtonOnClick
