// Add header text and style
const documentHeader = document.getElementById("header");

documentHeader.innerHTML = 
"<h1>JavaScript Made This!!</>" +
"<h2><span id='header-name'>Jeremy</span> wrote the JavaScript</h2>"

const headerName = document.getElementById('header-name');
headerName.style.color = "purple";

documentHeader.style.textAlign = "center";

// Change the words of the conversation
const messageLeft = document.getElementsByClassName("message left");
const messageRight = document.getElementsByClassName("message right")

for (let i = 0; i < messageLeft.length; i++) {
    if (i == 0) {
        messageLeft[i].innerHTML = "I have an interesting proposition for you.";
        console.log("testing");
    }
    else if (i == 1)
        messageLeft[i].innerHTML = "That won't be a problem. Anything to acquire your services.";
}

for (let i = 0; i < messageRight.length; i++) {
    if (i === 0) 
        messageRight[i].innerHTML = "I will only accept if it includes an all expense paid trip to the Bahamas.";
    else if (i === 1)
        messageRight[i].innerHTML = "Ok, now you are speaking my language.";
}

// Clear button functionality
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', () => {
    const messages = document.getElementsByClassName('messages');
    for (let i = 0; i < messages.length; i++) {
        messages[i].innerHTML = ""; 
    }
});
