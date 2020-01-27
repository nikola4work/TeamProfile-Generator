const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
//"util" module provides some functions to print formatted strings
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./templates/HtmlTemp");

const writeFileAsync = util.promisify(fs.writeFile);
//call is used to create a Write Stream and file with given filename.

const appendFile = util.promisify(fs.appendFile);

//The node.js "util" module provides some functions to print formatted strings as well as some 'utility' functions that are helpful for debugging purposes.

//promisify returns a function that will wrap the given nodeFunction .

let teamArray = [];
let teamstr = ``;

// async functions let you write Promise -based code as if it were synchronous. Once you define a function using the async keyword, then you can use the await keyword within the function's body

async function main() {
    try {
        await prompt();
        // for i to teamArray.length  =>

        for (let i = 0; i < teamArray.length; i++) {
            //template literal=``
            teamstr = teamstr + html.generateCard(teamArray[i]);
        }

        let finalHTML = html.generateHTML(teamstr);

        console.log(teamstr);

        //call generate function to generate the html template literal

        //write file
        writeFileAsync("./output/team.html", finalHTML);
    } catch (err) {
        return console.log(err);
    }
}

async function prompt() {
    let responseDone = "";
    // prompt to collect input and use do while atleast one and do it number of times depending on the while condition
    do {
        try {
            response = await inquirer.prompt([{
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?: "
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter the employee's ID: "
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter the employee's email address: "
                },
                {
                    type: "list",
                    name: "role",
                    message: "What what is the employee's role:",
                    choices: ["Engineer", "Intern", "Manager"]
                }
            ]);

            let response2 = "";
            // if else statement

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is the employee's github username?:"
                }]);
                //store the object and push
                const engineer = new Engineer(
                    response.name,
                    response.id,
                    response.email,
                    response2.x
                );
                teamArray.push(engineer);
            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([{
                    type: "input",

                    //the x is to only store into the team array
                    name: "x",
                    message: "What school is the employee attending?:"
                }]);
                //store the object and push
                const intern = new Intern(
                    response.name,
                    response.id,
                    response.email,
                    response2.x
                );
                teamArray.push(intern);
            } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is the employee's office number?:"
                }]);
                //store the object and push
                const manager = new Manager(
                    response.name,
                    response.id,
                    response.email,
                    response2.x
                );
                teamArray.push(manager);
            }
        } catch (err) {
            return console.log(err);
        }
        console.log(teamArray);
        //need to prompt do you want to continue

        responseDone = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you want to continue?: ",
            choices: ["Yes", "No"]
        }]);

        // console.log(responseDone.choices);
        //the while parameter is saying continue running the code if the user selects "yes"
    } while (responseDone.finish === "Yes");
}

//call function to run application on the server
main();