const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shape');

class Ask {
    constructor() {
        this.answers;
        this.shape;

    }

    initialize() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'letters',
                message: 'What are the 3 letters of the text?',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What if your font color? (enter hexidecimal code)',
            },
            {
                type: 'input',
                name: 'shapeColor',
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
        if (this.answers.shape === "Triangle") {
            this.shape = new Triangle(this.answers.color);
        } else if (this.answers.shape === "Circle") {
            this.shape = new Circle(this.answers.color);
        } else if (this.answers.shape === "Square") {
           this.shape = new Square(this.answers.color);
        }
        console.log(this.shape.render());

    } 



}

const input = new Ask() 
input.initialize();
   