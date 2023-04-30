class Shapes { 
    constructor() {
        this.colors = ''
    }
    setColors(colors) {
        this.colors = (colors);
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx='40' cy='40' r='100' height='75%' width='75%' fill='${this.colors}'/>`
    }
}

class Square extends Shapes {
    render() {
        return `<square x='50' height='100' width='100' fill='${this.colors}'/>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<triangle height='75%' width='75%' points='0,100 200,100 100,0' fill='${this.colors}'/>`
    }
};

module.exports = {Circle, Square, Triangle}