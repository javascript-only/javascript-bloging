import { create, createReportList } from "./js/canvas.js";
import { name, draw, reportArea, reportPerimeter } from "./js/square.js";
import randomSquare from "./js/square.js";

let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

let square2 = randomSquare(myCanvas.ctx);
