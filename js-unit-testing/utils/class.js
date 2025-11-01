class Person {
    constructor(name, age, employee) {
        if (typeof name !== 'string') {
            throw new TypeError("Name is not a string type");
        }
        this.name = name;
        if (typeof age === 'string' || !Number.isInteger(age)) {
            throw new TypeError("Age is not an integer type");
        }
        this.age = age;

        if (typeof employee !== 'boolean') {
            throw new TypeError("Employee is not a boolean type");
        }
        this.employee = employee;
    }

    // Setter Function
    set setName(name) {
        if (typeof name !== 'string') {
            throw new TypeError("Name is not a string type");
        }
        this.name = name;
    } 

    set setAge(age) {
        if (typeof age === 'string' && !Number.isInteger(age)) {
            throw new TypeError("Age is not an integer type");
        }
        this.age = age;
    } 

    set setEmployee(employee) {
        if (typeof employee !== 'boolean') {
            throw new TypeError("Employee is not a boolean type");
        }
        this.employee = employee;
    }

    // Getter Function
    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    get getEmployee() {
        return this.employee;
    }
    
    display() {
        console.log(`Hello, ${this.name} with the age of ${this.age} and currectly employee: ${this.employee ? "Yes": "No"}`);
    }
}

module.exports = Person;