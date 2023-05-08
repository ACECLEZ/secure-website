// Create the floating menu
const menu = document.createElement("div");
menu.style.position = "fixed";
menu.style.top = "50px";
menu.style.left = "50px";
menu.style.backgroundColor = "white";
menu.style.border = "1px solid black";
menu.style.padding = "10px";
menu.style.cursor = "move";

// Create the checkbox
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "myCheckbox";
checkbox.onclick = executeCode;

// Create the label for the checkbox
const label = document.createElement("label");
label.htmlFor = "myCheckbox";
label.appendChild(document.createTextNode("Clear Logs"));

// Add the checkbox and label to the menu
menu.appendChild(checkbox);
menu.appendChild(label);

// Add the menu to the page
document.body.appendChild(menu);

// Make the menu draggable
let isDragging = false;
let xOffset = 0;
let yOffset = 0;

menu.addEventListener("mousedown", startDragging);
menu.addEventListener("mouseup", stopDragging);
menu.addEventListener("mousemove", drag);

function startDragging(event) {
  isDragging = true;
  xOffset = event.clientX - menu.offsetLeft;
  yOffset = event.clientY - menu.offsetTop;
}

function stopDragging() {
  isDragging = false;
}

function drag(event) {
  if (isDragging) {
    menu.style.left = event.clientX - xOffset + "px";
    menu.style.top = event.clientY - yOffset + "px";
  }
}

// Function to execute when checkbox is clicked
function executeCode() {
  if (checkbox.checked) {
    window.location.replace("https://www.google.com/");
  }
}

