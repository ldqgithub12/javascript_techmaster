let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
let curColor = [...colors];
const boxElement = document.querySelector(".boxes")
const pointerElement = document.querySelector(".points")
const btnElement = document.querySelector("#btn")

const randomBox = arr => {
    boxElement.innerHTML = "";
    let html = "";
    arr.forEach((color, index) => {
        html += `<div 
        class="box"
        style="background-color: ${color}"
        onclick = "removeBox(${index})"
        ></div>`
    })
    boxElement.innerHTML = html;
}
btnElement.addEventListener("click", () => {
    curColor = [...curColor, ...colors]
    randomBox(curColor);
})
const removeBox = index => {
    curColor.splice(index, 1);
    randomBox(curColor);
}
randomBox(curColor)