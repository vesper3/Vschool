const changeButton = document.getElementById("changeButton");

changeButton.addEventListener('click', function() {
    // Test the function with different element IDs and new text content
    changeTextContent('heading', 'Welcome to my website!');
    changeTextContent('paragraph', 'This is a sample paragraph.');
});

function changeTextContent(elementId, newText) {
    const elementToChange = document.getElementById(elementId);
    elementToChange.textContent = newText;
}