// required to make everything work
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

class SVG {
    constructor() {
        this.textElement = ''
        this.shapesElement = ''
    }
    render() {
        // need to know what to render
    }
    setTextElement(text,colors) {
        this.textElement = `<text x='30' y='30' font-size='60' text-anchor='middle' fill='${text,colors}`
    }
    setShapesElement() {
        this.shapesElement = shapes.render()
    }
};