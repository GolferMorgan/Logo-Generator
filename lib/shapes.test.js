

// circle test
const Circle = require('./shapes').Circle;
test('Circle', () => {
        const shapes = new Circle();
        var colors = ('green')
        shapes.setColors(colors);
        expect(shapes.render()).toEqual(`<circle cx='40' cy='40' r='100' height='75%' width='75%' fill='green'/>`)
});

// square test
const Square = require('./shapes').Square;
test('Square', () => {
        const shapes = new Square();
        var colors = ('yellow')
        shapes.setColors(colors);
        expect(shapes.render()).toEqual(`<rect x='50' height='100' width='100' fill='yellow'/>`)
    });


// traingle test
const Triangle = require('./shapes').Triangle
test('Triangle', () => {
        const shapes = new Triangle();
        var colors = ('red')
        shapes.setColors(colors);
        expect(shapes.render()).toEqual(`<polygon height='75%' width='75%' points='0,100 200,100 100,0' fill='red'/>`)
    });
