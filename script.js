let gameBoard = document.querySelector(".game-board");
let chosenColor = document.querySelectorAll(".colorPicker");
let clearStyle = document.querySelector(".clearBtn");
let selectedColor = "#000";
let isDrawing = false;

const createElement = () => {
  for (let i = 0; i < 15 * 15; i++) {
    const gridSection = document.createElement("p");
    gridSection.classList.add("gridSection");
    gameBoard.appendChild(gridSection);
  }
};

createElement();

chosenColor.forEach((colorInput) => {
  colorInput.addEventListener("input", (e) => {
    chosenColor.forEach((p) => p.classList.remove("colorPicker-selected"));
    colorInput.classList.add("colorPicker-selected");
    selectedColor = e.target.value;
  });
});

gameBoard.addEventListener("mousedown", (e) => {
  isDrawing = true;
  if (e.target.tagName === "P") {
    e.target.style.backgroundColor = selectedColor;
  }
});

gameBoard.addEventListener("mouseover", (e) => {
  if (isDrawing && e.target.tagName === "P") {
    e.target.style.backgroundColor = selectedColor;
  }
});

gameBoard.addEventListener("mouseup", () => {
  isDrawing = false;
});

clearStyle.addEventListener("click", () => {
  gameBoard.innerHTML = "";
  createElement();
});
