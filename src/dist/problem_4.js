"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === "circle") {
            const area = Math.PI * shape.radius ** 2;
            return area.toFixed(2);
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        else {
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
