{
  /**
   * problem 3
   * Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
   */

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type calculateShapeAreaFuntion = (
    shape: Circle | Rectangle
  ) => number | string;

  const calculateShapeArea: calculateShapeAreaFuntion = (
    shape: Circle | Rectangle
  ): number | string => {
    if (shape.shape === "circle") {
      const area: number = Math.PI * shape.radius ** 2;
      return area.toFixed(2);
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    } else {
      return "Invalid shape";
    }
  };

  // output 1
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  // Output 2
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);
}
