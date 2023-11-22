/**
 * Car class
 * @constructor
 * @param {String} model
 */



/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  toString() {
    return `Make: ${this.make}, Model: ${this.model}, Speed: ${this.speed} mph`;
  }
}

class ElectricCar extends Car {
  constructor(make, model) {
    super(make, model);
    this.motor = "electric";
  }

  accelerate() {
    super.accelerate(); // Call the parent class's accelerate method
    super.accelerate(); // Call it again to accelerate twice
  }

  toString() {
    return `Make: ${this.make}, Model: ${this.model}, Speed: ${this.speed} mph, Motor: ${this.motor}`;
  }
}

// Create an instance of ElectricCar
const electricCar = new ElectricCar("Tesla", "Model 3");

// Accelerate twice
electricCar.accelerate();
electricCar.accelerate();

// Brake once
electricCar.brake();

// Display car information
console.log(electricCar.toString());