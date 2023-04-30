// required to make everything work
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

// added svg class
class SVG {
    constructor() {
        this.textElement = ''
        this.shapesElement = ''
    }
    render() {
        return `<SVG height='300px' width='300px' viewBox='0 0 300 300'/>`
    }
    setTextElement(text,colors) {
        this.textElement = `<text x='30' y='30' font-size='60' text-anchor='middle' fill='${text,colors}`
    }
    setShapesElement() {
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
        name: 'shape-color',
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
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// initailizes app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('making a logo')
        writeToFile("./examples",((response)))
    })
}

// Function call to initialize app
init();