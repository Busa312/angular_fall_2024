class Person {
    firstName;
    lastName;
    #age;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.setAge(age);
    }

    getAge() {
        this.#age;
    }

    setAge(age) {
        if (age < 0) {

            if (!this.#age) {
                this.#age = 1;
            }

            return this.#age;

        }
        this.#age = age;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    celebrateBirthday() {
        this.#age++;
        return this.#age;
    }
}

// let person = new Person('busa', 'gadelia', 22);

// console.log(person.getFullName());

// console.log(person.celebrateBirthday());

class Employee extends Person {
    jobTitle;
    salary;

    constructor(firstName, lastName, age, jobTitle, salary) {
        super(firstName, lastName, age);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }
    // "Name: <fullName>, Job Title: <jobTitle>, Salary: <salary>"
    getEmployeeInfo() {
        return `Name: ${this.getFullName()}, Job Title: ${this.jobTitle}, Salary: ${this.salary}`;
    }
}

class ContractEmployee extends Employee {

    contractDuration;

    constructor(firstName, lastName, age, jobTitle, salary, contractDuration) {
        super(firstName, lastName, age, jobTitle, salary);
        this.contractDuration = contractDuration;
    }

    // "Name: <fullName>, Job Title: <jobTitle>, Salary: <salary>, Duration: <contractDuration>"
    getEmployeeInfo() {
        return `Name: ${this.getFullName()}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Duration ${this.contractDuration}`;
    }

}

let emp = new Employee('vigac', 'vigacashvili', 28, 'Developeri', 100000);
let contractor = new ContractEmployee('kide', 'vigac', 20, 'aseve developeri', 50000, 8);

console.log(emp.getEmployeeInfo());

console.log(contractor.getEmployeeInfo());

// console.log(emp.getFullName());
// console.log(emp.getEmployeeInfo());