/*
GROUP ACTIVITY: ABSTRACTION
In groups of 3-4
1. Create an abstract class Vehicle, a constructor that initialises make,
model, and year. Add an abstract method
display_vehicle_info() that should throw an error if it is not
overridden.
2. Modify the Car and ElectricCar classes to extend Vehicle and
implement the display_vehicle_info method to return car
information for each type, e.g “This is an electric/petrol car”.
3. Override the estimate_range method to customise behavior for
electric cars.
*/

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  displayVehicleInfo() {
    throw new Error("Not implemented, idiot");
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }

  displayCarInfo() {
    return `This car is a ${this.year} ${this.make} ${this.model}`;
  }
  
  displayVehicleInfo() {
    return "This is a petrol car";
  }
}

class ElectricCar extends Vehicle {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
  }
  
  estimateRange() {
    return `This car has estimated range of ${this.batteryCapacity * 50}`;
  }
  
  displayVehicleInfo() {
    return "This is an electric car";
  }
}

const electricCar = new ElectricCar("Kenco", "Ken-Tric 2000", "2093", 50);
const petrolCar = new Car("BYD", "Some Car", 2100);

const allCars = [electricCar, petrolCar];

for (const car of allCars) {
  console.log(car.displayVehicleInfo());
}
