class Car {
  constructor(make, model, year) {
    this.make = make; //brand of the car
    this.model = model; //model name of the car
    this.year = year; //year
  }

  displayCarInfo() {
    return `This car is a ${this.year} ${this.make} ${this.model}`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
  }
  
  estimateRange() {
    return `This car has estimated range of ${this.batteryCapacity * 50}`
  }
}

const firstCar = new ElectricCar("Hyundai", "Electro", "2030", 50);
const secondCar = new ElectricCar("VW", "PowerCell", "2050", 100);

console.log(firstCar.displayCarInfo())
console.log(firstCar.estimateRange())