import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/triangle.js";

import * as Triangle from "./modules/circle.js";

let myCanvas = Canvas.create("myCanvas", document.body, 480, 320);
let reportList = Canvas.createReportList(myCanvas.id);

let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);

let circle1 = drawCircle(myCanvas.ctx, 75, 200, 100, "green");
Circle.reportArea(circle1.radius, reportList);
Circle.reportPerimeter(circle1.radius, reportList);

let triangle1 = drawTriangle(myCanvas.ctx, 100, 75, 190, "yellow");
Triangle.reportArea(triangle1.length, reportList);
Triangle.reportPerimeter(triangle1.length, reportList);
