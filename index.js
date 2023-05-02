// required to make everything work
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes')

// added svg class
class SVG {
    constructor() {
        this.textElement = ''
        this.shapesElement = ''
    }
    render() {
        return `<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">${this.shapesElement}${this.textElement}</svg>`
    }
    setTextElement(text,colors) {
        this.textElement = `<text x='200' y='200' font-size='100' text-anchor='middle' fill='${colors}'>${text}</text>`
        // <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    }
    setShapesElement(shapes) {
        this.shapesElement = shapes.render()
    }
};

// added inquirer questions
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What are your initials?',
    },
    {
        type: 'input',
        name: 'colors',
        message: 'What color would you like your initials?',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like it to be?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
]

// writes the logo file
function writeToFile(fileName, svg) {
    return fs.writeFileSync(fileName, svg, function(error) {
        if (error) {
            console.log('oops there is a problem!')
        }
        console.log('logo generated in logo.svg!')
    })
}
let shape;
const svg = new SVG();
// initailizes app
function init() {
    inquirer.prompt(questions).then(function(data) {
     console.log(data);
     if (data.shape === 'Circle') {
        shape = new Circle()
     } else if (data.shape === 'Square') {
        shape = new Square()
     } else if (data.shape === 'Triangle') {
        shape = new Triangle()
     }
     shape.setColors(data.shapeColor)
     svg.setShapesElement(shape)
     svg.setTextElement(data.text,data.colors)
     console.log(svg.render)

     var fileName = 'logo.svg'
     console.log(svg.render())
     writeToFile(fileName, svg.render())
    })
}

// Function call to initialize app
init();