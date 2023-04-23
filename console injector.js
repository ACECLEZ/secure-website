// Create a container element
const container = document.createElement('div');
container.style.padding = '20px';
container.style.position = 'fixed';
container.style.top = '0';
container.style.left = '0';
container.style.backgroundColor = 'white'; // Add a background color
container.style.zIndex = '9999'; // Set a higher z-index

// Create a menu element
const menu = document.createElement('ul');
menu.id = 'menu';
menu.style.listStyle = 'none';
menu.style.padding = '0';

// Create menu items
const items = [
  { id: 'item1', label: 'Bypass Blocksi' },
];

items.forEach(item => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = item.id;
  const label = document.createElement('label');
  label.textContent = item.label;
  label.htmlFor = item.id;
  li.appendChild(checkbox);
  li.appendChild(label);
  menu.appendChild(li);
});

// Append menu to container
container.appendChild(menu);

// Insert container into the DOM
document.body.appendChild(container);
