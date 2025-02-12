import { Canvas } from "./modules/canvas.js";

import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";

let myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
myCanvas.createReportList();

let square1 = new Square(myCanvas.ctx, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();

let circle1 = new Circle(myCanvas.ctx, 75, 200, 100, "green");
circle1.draw();
circle1.reportArea();
circle1.reportPerimeter();

let triangle1 = new Triangle(myCanvas.ctx, 100, 75, 190, "yellow");
triangle1.draw();
triangle1.reportArea();
triangle1.reportPerimeter();
