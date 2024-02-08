document.addEventListener("DOMContentLoaded", () => {
  displayItems();
  document.getElementById("addItemBtn").addEventListener("click", addItem);
});

function addItem() {
  var itemName = document.getElementById("itemName").value;
  var quantity = document.getElementById("quantity").value;
  var price = document.getElementById("price").value;

  if (itemName === "" || quantity === "" || price === "") {
    alert("Please fill in all fields");
    return;
  }

  var item = {
    name: itemName,
    quantity: quantity,
    price: price,
  };

  var items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));

  displayItems();
  document.getElementById("itemForm").reset();
}

function displayItems() {
  var items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  var itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  items.forEach((item, index) => {
    var row = itemList.insertRow();
    var nameCell = row.insertCell(0);
    var quantityCell = row.insertCell(1);
    var priceCell = row.insertCell(2);
    var actionCell = row.insertCell(3);

    nameCell.innerHTML = item.name;
    quantityCell.innerHTML = item.quantity;
    priceCell.innerHTML = item.price;
    actionCell.innerHTML = `<button onclick="editItem(${index})">Edit</button>
                               <button onclick="deleteItem(${index})">Delete</button>`;
  });
}

function editItem(index) {
  var items = JSON.parse(localStorage.getItem("items"));
  var item = items[index];
  document.getElementById("itemName").value = item.name;
  document.getElementById("quantity").value = item.quantity;
  document.getElementById("price").value = item.price;

  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  displayItems();
}

function deleteItem(index) {
  var items = JSON.parse(localStorage.getItem("items"));
  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  displayItems();
}
a;
