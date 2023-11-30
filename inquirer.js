const inquirer = require('inquirer');
const fs = require('fs');

class Ask {
    constructor() {
        this.answers

    }

    initialize() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'What are the 3 letters of the text?',
            },
            {
                type: 'input',
                name: 'fontcolor',
                message: 'What if your font color? (enter hexidecimal code)',
            },
            {
                type: 'input',
                name: 'color',
                message: 'What if your background color? (enter hexidecimal code)',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape',
                choices: [
                    "Circle",
                    "Triangle",
                    "Square",
                ],
            }
        ]).then(answers => {
            this.answers = answers
            this.writeFile();
        })
    }


    writeFile() {
        console.log(this.answers);

    }


}

const input = new Ask() 
input.initialize();
 