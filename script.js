let items = JSON.parse(localStorage.getItem('items')) || [];

function saveItems() {
  localStorage.setItem('items', JSON.stringify(items));
}

function renderItems() {
  const list = document.getElementById('itemList');
  list.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item}</span>
      <button onclick="editItem(${index})">Edit</button>
      <button onclick="deleteItem(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();
  if (value) {
    items.push(value);
    saveItems();
    renderItems();
    input.value = '';
  }
}

function editItem(index) {
  const newValue = prompt("Edit item:", items[index]);
  if (newValue !== null) {
    items[index] = newValue.trim();
    saveItems();
    renderItems();
  }
}

function deleteItem(index) {
  if (confirm("Delete this item?")) {
    items.splice(index, 1);
    saveItems();
    renderItems();
  }
}

renderItems();
