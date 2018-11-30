// 1. Define a prototype for a class named "Employee".
// An employee has a first name, last name and a salary.
// Provide a method for increasing their salary by 1,000
// Provide a method for displaying the employee details

/*
* pDtata = {
*   firstName: "someFirstName",
*   lastName: "someLastNime",
*   salary; "someSalary"
* }
*
*/
function Employee(pData) {
    data = pData;
    Employee.prototype.showInfo= function (){
        alert("First Name: " +data.firstName + " Last Name: " + data.lastName + " Salary: " + data.salary);
    }
    Employee.prototype.increaseSalary= function (){
        const currentSalary = data.salary;
        let newSalary = currentSalary + 1000;
        data.salary = newSalary;
    }
}

// 2. Write a function called "MultiplyBy" which will produce the following outputs when invoked:
// console.log((2)(3)(4)); // oumultput : 24 
// console.log(mul(4)(3)(4)); // output : 48

function MultiplyBy(x) {
    return function(y) {
        return function(z){
            return x * y * z;
        }
    }
}

// 3. Write a function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function Longest_Country_Name(countries) {
    let longest = countries[0];
    countries.map(function(current){
        current.length > longest.length && (longest = current)
    });
    return longest;
}


