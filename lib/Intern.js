const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;

//The super keyword is used to access and call functions on an object's parent.