// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palette = document.querySelectorAll("#palette");
const currentColor = document.querySelector("#current-color");
palette.forEach(palettes => {
  palettes.addEventListener("click" , (event) => {
    event.target.style.background = currentColor.style.background
  })
});

const cell = document.querySelectorAll(".cell");
cell.forEach(cells => {
  cells.addEventListener("click", (event) => {
    event.target.style.background = currentColor.style.background
  })
});