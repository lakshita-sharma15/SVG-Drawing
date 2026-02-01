const canvas = document.getElementById("canvas");
const clearBtn = document.getElementById("clear");

let isDrawing = false;
let currentLine = null;

canvas.addEventListener("mousedown", () => {
  isDrawing = true;

  currentLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline"
  );

  currentLine.setAttribute("points", "");
  canvas.appendChild(currentLine);
});


canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  let points = currentLine.getAttribute("points");
  points += `${x},${y} `;
  currentLine.setAttribute("points", points);
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  currentLine = null;
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
  currentLine = null;
});

clearBtn.addEventListener("click", () => {
  const bg = document.getElementById("bg");
  canvas.innerHTML = "";
  canvas.appendChild(bg);
});
