function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'!`);
}


// Inherit from another constructure before other objects have been made
// This is to prevent performance issues
Object.getPrototypeOf(Player.prototype);
console.log(Object.setPrototypeOf(Player.prototype, Person.prototype));
console.log(Object.getPrototypeOf(Player.prototype));

const player1 = new Player('steve', 'X');
const player2 = new Player('also stseve', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();
