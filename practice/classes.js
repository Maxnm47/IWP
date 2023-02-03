class rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        
    }
    get area() {
        return this.calcArea
    }
    
    calcArea() {
        return this.height * this.width
    }
    *getSides() {
        yield this.height;
        yield this.width;

      }
}

let rectone = new rectangle(100, 100);

console.log(rectone, "area: " + rectone.calcArea(rectone.height, rectone.width))
