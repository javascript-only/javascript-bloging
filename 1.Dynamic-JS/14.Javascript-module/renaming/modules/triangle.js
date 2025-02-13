const name = "triangle";

function degToRed(degrees) {
  return (degrees * Math.PI) / 100;
}

function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo();
  ctx.lineTo(x + length, y);
  let triHeight = (length / 2) * Math.tan(degToRed(60));
  ctx.lineTo(x + length / 2, y + triHeight);
  ctx.lineTo(x, y);
  ctx.fill();

  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}

function reportArea(length, listId) {
  let listItem = document.createElement("li");
  listItem.textContent = `${name} area is ${Math.round(
    (Math.sqrt(3) / 4) * length
  )}px squared`;

  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

function reportPerimeter(length, listId) {
  let listItem = document.createElement("li");
  listItem.textContent = `${name} perimeter is ${length * 3}px.`;

  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

export { name, draw, reportArea, reportPerimeter };
