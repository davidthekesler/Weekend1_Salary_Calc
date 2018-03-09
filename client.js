console.log('js');

class Employee {
  constructor(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumberIn = idNumber;
    this.jobTitleIn = jobTitle;
    this.annualSalaryIn = annualSalary;
  }
}

$(document).ready(readyNow);  //wait for doc to be ready before loading readyNow

function readyNow () {
console.log('in ready now');
//firstName, lastName, idNumber, jobTitle, annualSalary
$('#submitButton').on('click', submitButtonOnClick);
  }//end readyNow
