
// Create the floating menu
const yulongMenu = document.createElement("div");
yulongMenu.style.position = "fixed";
yulongMenu.style.top = "50px";
yulongMenu.style.left = "50px";
yulongMenu.style.backgroundColor = "white";
yulongMenu.style.border = "1px solid black";
yulongMenu.style.padding = "10px";
yulongMenu.style.cursor = "move";

// Create the checkbox
const yulonging = document.createElement("input");
yulonging.type = "checkbox";
yulonging.id = "myYulonging";
yulonging.onclick = executeYulongCode;

// Create the label for the checkbox
const yulongs = document.createElement("label");
yulongs.htmlFor = "myYulonging";
yulongs.appendChild(document.createTextNode("Clear Logs"));

// Add the checkbox and label to the menu
yulongMenu.appendChild(yulonging);
yulongMenu.appendChild(yulongs);

// Add the menu to the page
document.body.appendChild(yulongMenu);

// Make the menu draggable
let isYulongDragging = false;
let yulongXOffset = 0;
let yulongYOffset = 0;

yulongMenu.addEventListener("mousedown", startYulongDragging);
yulongMenu.addEventListener("mouseup", stopYulongDragging);
yulongMenu.addEventListener("mousemove", dragYulong);

function startYulongDragging(event) {
isYulongDragging = true;
yulongXOffset = event.clientX - yulongMenu.offsetLeft;
yulongYOffset = event.clientY - yulongMenu.offsetTop;
}

function stopYulongDragging() {
isYulongDragging = false;
}

function dragYulong(event) {
if (isYulongDragging) {
yulongMenu.style.left = event.clientX - yulongXOffset + "px";
yulongMenu.style.top = event.clientY - yulongYOffset + "px";
}
}

// Function to execute when checkbox is clicked
function executeYulongCode() {
if (yulonging.checked) {
window.location.replace("https://www.google.com/");
}
}






