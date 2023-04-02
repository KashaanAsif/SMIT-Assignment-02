abstract class Vehicle {
  make: number;
  model: string;
  year: number;
  rented: boolean;

  constructor(make: number, model: string, year: number, rented: boolean) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = rented;
  }

  public getmake(): number {
    return this.make;
  }

  public setmake(v: number) {
    this.make = v;
  }

  public getmodel(): string {
    return this.model;
  }

  public setmodel(m: string) {
    this.model = m;
  }

  public getyear(): number {
    return this.year;
  }

  public setyear(y: number) {
    this.year = y;
  }

  public getrented(): boolean {
    return this.rented;
  }

  public setrented(r: boolean) {
    this.rented = r;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (this.rented) {
      console.log("Vehicle is already rented");
    } else {
      this.rented = true;
      console.log("Vehicle is now rented");
    }
  }

  return(): void {
    if (!this.rented) {
      console.log("Vehicle is already returned");
    } else {
      this.rented = false;
      console.log("Vehicle is now returned");
    }
  }
}

class Car extends Vehicle {
  rentalRate(): number {
    return 50000;
  }
}

class Truck extends Vehicle {
  rentalRate(): number {
    return 100000;
  }
}

class MotorCycle extends Vehicle {
  rentalRate(): number {
    return 25000;
  }
}

const car = new Car(2022, "Pakistan", 2021, false);
const truck = new Truck(2015, "Italy", 2016, true);
const motorcycle = new MotorCycle(2019, "USA", 2020, true);

car.rent();
car.rent();
car.return();
truck.rent();
truck.return();
motorcycle.rent();
motorcycle.return();
