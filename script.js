let gameBoard = document.querySelector(".game-board");
let chosenColor = document.querySelectorAll(".colorPicker");
let clearStyle = document.querySelector(".clearBtn");
let selectedColor = "#000";
let prevSelectedColor = null;

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

gameBoard.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    e.target.style.backgroundColor = selectedColor;
  }
});

clearStyle.addEventListener("click", () => {
  gameBoard.innerHTML = "";
  createElement();
});
