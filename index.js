// Write your solution in this file!
const employee = {
    name: "Tanooki", 
    streetAddress: "111 fanta lane"}

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const newEmployeeObject = {...employee};

    newEmployeeObject.name = "Sam";
    newEmployeeObject.streetAddress = "11 Broadway";

    return newEmployeeObject;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = "12 Broadway";

    return employee;

}

function deleteFromEmployeeByKey(employee, key){

    // delete employee.name;

    // return employee

    const newEmployee = {...employee};

    delete newEmployee.name;

    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee.name;

    return employee;
}