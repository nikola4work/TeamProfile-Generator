const Employee = require("./Employee");

//class constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;

//The constructor method is a special method for creating and initializing an object created within a class.

//The extends keyword is used to create a child class of another class (parent).