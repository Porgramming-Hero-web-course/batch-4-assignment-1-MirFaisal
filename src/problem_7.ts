{
  /**
   * Problem 7
   * Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
   */
  class Car {
    public make: string;
    public model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    // Public method to calculate the car's age
    public getCarAge(): string {
      const currentYear: number = new Date().getFullYear();
      return `${
        currentYear - this.year
      } (assuming current year is ${currentYear})`;
    }
  }

  //output 1
  const car2 = new Car("Honda", "Civic", 2018);
  console.log(car2.getCarAge());
  // Output 2
  const car = new Car("Toyota", "supra", 2020);
  console.log(car.getCarAge());
}
