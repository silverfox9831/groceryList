let groceryList = [];

function addItem() {
    let item = document.getElementById('itemInput').value.trim();
    if (item && !groceryList.includes(item)) {
        groceryList.push(item);
        document.getElementById('itemInput').value = ''; // Clear input field
        displayList(); // Automatically display the updated list
    } else if (groceryList.includes(item)) {
        alert(`${item} is already on the list.`);
    } else {
        alert(`Please enter an item name.`);
    }
}

function displayList() {
    let listElement = document.getElementById('groceryList');
    listElement.innerHTML = ''; // Clear the list before displaying updated list

    if (groceryList.length > 0) {
        groceryList.forEach((item) => {
            let li = document.createElement('li');
            li.textContent = item;
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function() { removeItem(item); };
            li.appendChild(removeButton);
            listElement.appendChild(li);
        });
    } else {
        listElement.innerHTML = '<li>The grocery list is empty.</li>';
    }
}

function removeItem(itemToRemove) {
    groceryList = groceryList.filter(item => item !== itemToRemove);
    displayList(); // Update the displayed list
}

// You may remove the separate Display List button from the HTML since the list updates automatically now
