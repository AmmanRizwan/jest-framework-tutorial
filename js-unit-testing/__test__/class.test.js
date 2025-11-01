const Person = require("../utils/class.js");

describe("Person class unit testing", () => {
    it("should return correclty declare a person class", () => {
        const person1 = new Person("Rizwan", 23, true);
        expect(() => new Person("Amman Rizwan", 23, true)).not.toThrow(TypeError);
        expect(person1).toBeDefined();
    })

    it("should throw an error due to unmatch type", () => {
        expect(() => new Person(23, 23.2, "false")).toThrow(TypeError);
        expect(() => new Person("Dave", 23, "true")).toThrow("Employee is not a boolean type");
        expect(() => new Person("Gray", 18.2, true)).toThrow("Age is not an integer type");
        expect(() => new Person(12434, 12, false)).toThrow("Name is not a string type")
    });

    it("should return the getter function values", () => {
        const person1 = new Person("Doe", 23, true);

        expect(person1.getName).toBe("Doe");
        expect(person1.getAge).toBe(23);
        expect(person1.getEmployee).toBe(true);
    })

    it("should change the value using setter function", () => {
        const person1 = new Person("John Doe", 23, false);

        person1.setAge = 22;
        person1.setName = "Jammy Doe";
        person1.setEmployee = true;

        expect(person1.getEmployee).toBe(true);
        expect(person1.getAge).toBe(22);
        expect(person1.getName).toBe("Jammy Doe");
    })

    it("should throw an error when value is not as type", () => {
        const person1 = new Person("John Doe", 22, false);

        expect(() => { person1.setEmployee = "no" }).toThrow("Employee is not a boolean type");
        expect(() => { person1.setAge = "23" }).toThrow("Age is not an integer type");
        expect(() => { person1.setName = 123.232}).toThrow("Name is not a string type");
    })

    it("should display value correctly", () => {
        const person1 = new Person("Jammy", 22, true);

        const spyLog = jest.spyOn(console, "log").mockImplementation(() => {});

        person1.display();

        expect(spyLog).toHaveBeenCalledWith(`Hello, Jammy with the age of 22 and currectly employee: Yes`);
        spyLog.mockRestore();
    })
})