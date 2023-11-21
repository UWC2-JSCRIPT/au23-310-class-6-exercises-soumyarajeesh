/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
// Define the Car class
class Car {
    constructor(model) {
      this.model = model;
      this.currentSpeed = 0;
    }
  
    accelerate() {
      this.currentSpeed += 1;
    }
  
    brake() {
      this.currentSpeed -= 1;
    }
  
    toString() {
      return `Car Model: ${this.model}, Current Speed: ${this.currentSpeed}`;
    }
  }
  
  // Define the ElectricCar class that inherits from Car
  class ElectricCar extends Car {
    constructor(model) {
      super(model);
      this.motor = "electric";
    }
  
    accelerate() {
      super.accelerate(); // Call the accelerate method of the parent class (Car) twice
      super.accelerate();
    }
  
    toString() {
      return `Electric Car Model: ${this.model}, Motor: ${this.motor}, Current Speed: ${this.currentSpeed}`;
    }
  }
  
  // Create an instance of ElectricCar
  const electricCar = new ElectricCar("Tesla Model 3");
  
  // Accelerate twice (faster acceleration)
  electricCar.accelerate();
  electricCar.accelerate();
  
  // Brake once
  electricCar.brake();
  
  // Console log the instance using the toString method
  console.log(electricCar.toString());