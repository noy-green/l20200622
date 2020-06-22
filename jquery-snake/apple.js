/*
var apple = new Apple();
apple.move();
apple.draw(); 
 */

// class Apple {
//     constructor() {
//         this.position = new Block(10,10)
//     }

//     draw() {
//         this.position.drawCircle("LimeGreen");        
//     }

//     move() {
//         var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
//         var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
//         this.position = new Block(randomCol, randomRow);
//     }
// }

// let a = new Apple()
var Apple = function () {
    this.position = new Block(10, 10);
};

Apple.prototype.draw = function () {
    this.position.drawCircle("LimeGreen");
};

Apple.prototype.move = function () {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
};





