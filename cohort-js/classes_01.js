class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    speak(){
        console.log("hi there " + this.speaks);
    }
}

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");
cat.speak();


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    calcArea() {
        console.log(this.height * this.width); 
    }
}


const area = new Rectangle(10,10);
area.calcArea();







///////////////////////////////////////////////////////////////

const date = new Date();

console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDay());
