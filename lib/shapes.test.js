// circle test
const Circle = require('./shapes').Circle;
test('Circle', () => {
        const shapes = new Circle();
        var colors = ('green')
        shapes.setColors(colors);
        expect(shapes.render()).toEqual(`<circle cx='200' cy='200' r='200' height='100%' width='100%' fill='green'/>`)
});

// square test
const Square = require('./shapes').Square;
test('Square', () => {
        const shapes = new Square();
        var colors = ('yellow')
        shapes.setColors(colors);
        expect(shapes.render()).toEqual(`<rect height='100%' width='100%' fill='yellow'/>`)
    });


// traingle test
const Triangle = require('./shapes').Triangle
test('Triangle', () => {
        const shapes = new Triangle();
        var colors = ('red')
        shapes.setColors(colors);
        expect(shapes.render()).toEqual(`<polygon height='100%' width='100%' points='0,300 400,200 300,0' fill='red'/>`)
    });
