class Shapes { 
    constructor() {
        this.colors = ''
    }
    setColors(colors) {
        this.colors = colors;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx='200' cy='200' r='200' height='100%' width='100%' fill='${this.colors}'/>`
    }
}

class Square extends Shapes {
    render() {
        return `<rect height='100%' width='100%' fill='${this.colors}'/>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon height='100%' width='100%' points='10,200 200,0 400,200' fill='${this.colors}'/>`
    }
};

module.exports = { Circle, Square, Triangle };