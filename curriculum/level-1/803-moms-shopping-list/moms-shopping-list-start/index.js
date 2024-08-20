// Get the form element
const addItemForm = document.getElementById('add-todo');

// Add an event listener to form submit event
addItemForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the submitted item
    const newItem = document.getElementById('title').value;

    // Add new item to list
    addListItem(newItem);

    // Clear the form
    addItemForm.reset();
});

function addListItem(item) {
    // Get the list element
    const list = document.getElementById('list');

    // Create new list item
    const listItem = document.createElement('li');
    listItem.style.display = 'flex'; 
    // Stack elements vertically so that text and buttons are on different rows
    listItem.style.flexDirection = 'column'; 
    listItem.style.alignItems = 'center'; 

    // Create div with item name
    const itemDiv = document.createElement('div');
    itemDiv.textContent = item;
    itemDiv.style.marginBottom = '10px';
    itemDiv.style.textAlign = 'center';

    // Create a div for the buttons
    const buttonContainer = document.createElement('div');

    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.style.marginRight = '4px';

    // Add event listener to the newly created edit button
    editButton.addEventListener('click', function() {
        // Create input box with item name populated
        const inputBox = document.createElement('input');
        inputBox.type = 'text';
        inputBox.value = itemDiv.textContent;
        inputBox.style.width = '150px'; 
        inputBox.style.padding = '5px';
        inputBox.style.border = '1px solid';

        // Replace the item div with the input box
        itemDiv.replaceWith(inputBox);

        // Create a save button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'save';
        saveButton.style.marginRight = '4px';

        // Add event listener to the save button
        saveButton.addEventListener('click', function() {
            // Update the item div with the new value from the input box
            itemDiv.textContent = inputBox.value;
            // Replace the input box with the updated item div
            inputBox.replaceWith(itemDiv);
            // Remove the save button
            saveButton.replaceWith(editButton);
        });

        // Replace the edit button with the save button
        editButton.replaceWith(saveButton);
    });

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';
    deleteButton.textContent = 'X';

    // Add event listener to the newly created delete button
    deleteButton.addEventListener('click', function() {
        // Select parent li item and then remove
        const itemToRemove = deleteButton.parentElement.parentElement; // Get the li element
        itemToRemove.remove();
    });

    // Append buttons to the button container
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    // Append elements to list item
    listItem.appendChild(itemDiv);
    listItem.appendChild(buttonContainer); 

    // Append list item to list
    list.appendChild(listItem);
}
