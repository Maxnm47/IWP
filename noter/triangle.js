class triangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
var rectone = new triangle(100, 100);

var rect = {
    height: null,
    width: null
}

rect1 = Object.create(rect, 10, 10)

rect1.height = 100;
rect1.width = 100;

console.log(rect1)
