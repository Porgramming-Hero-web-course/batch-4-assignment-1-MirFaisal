"use strict";
{
    /**
     * Problem 7
     * Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
     */
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        // Public method to calculate the car's age
        getCarAge() {
            const currentYear = new Date().getFullYear();
            return `${currentYear - this.year} (assuming current year is ${currentYear})`;
        }
    }
    //output 1
    const car2 = new Car("Honda", "Civic", 2018);
    console.log(car2.getCarAge());
    // Output 2
    const car = new Car("Toyota", "supra", 2020);
    console.log(car.getCarAge());
}
