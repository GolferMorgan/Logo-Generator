const {Circle, Square, Triangle} = require('./shapes')

// circle test
describe('Circle', () => {
    test('renders correct', () => {
        const shapes = new Circle();
        var colors = ('green')
        shapes.setColors(colors);
        expect(shapes.render()).toEqual(`<circle cx='40' cy='40' r='100' height='75%' width='75%' fill='$(this.colors)'/>`)
    });
});

// square test
describe('Square', () => {
    test('renders correct', () => {
        const shapes = new Square();
        var colors = ('yellow')
        shapes.setColors(colors);
        expect(shapes.render()).toEqual(`<square x='50' height='100' width='100' fill='$(this.colors)'/>`)
    });
});

// traingle test
describe('Triangle', () => {
    test('renders correct', () => {
        const shapes = new Triangle();
        var colors = ('red')
        shapes.setColors(colors);
        expect(shapes.render()).toEqual(`<triangle height='75%' width='75%' points='0,100 200,100 100,0' fill='$(this.colors)'/>`)
    });
});