var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    Vehicle.prototype.getmake = function () {
        return this.make;
    };
    Vehicle.prototype.setmake = function (v) {
        this.make = v;
    };
    Vehicle.prototype.getmodel = function () {
        return this.model;
    };
    Vehicle.prototype.setmodel = function (m) {
        this.model = m;
    };
    Vehicle.prototype.getyear = function () {
        return this.year;
    };
    Vehicle.prototype.setyear = function (y) {
        this.year = y;
    };
    Vehicle.prototype.getrented = function () {
        return this.rented;
    };
    Vehicle.prototype.setrented = function (r) {
        this.rented = r;
    };
    Vehicle.prototype.rent = function () {
        if (this.rented) {
            console.log("Vehicle is already rented");
        }
        else {
            this.rented = true;
            console.log("Vehicle is now rented");
        }
    };
    Vehicle.prototype["return"] = function () {
        if (!this.rented) {
            console.log("Vehicle is already returned");
        }
        else {
            this.rented = false;
            console.log("Vehicle is now returned");
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.rentalRate = function () {
        return 50000;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.prototype.rentalRate = function () {
        return 100000;
    };
    return Truck;
}(Vehicle));
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotorCycle.prototype.rentalRate = function () {
        return 25000;
    };
    return MotorCycle;
}(Vehicle));
var car = new Car(2022, "Pakistan", 2021, false);
var truck = new Truck(2015, "Italy", 2016, true);
var motorcycle = new MotorCycle(2019, "USA", 2020, true);
car.rent();
car.rent();
car["return"]();
truck.rent();
truck["return"]();
motorcycle.rent();
motorcycle["return"]();
