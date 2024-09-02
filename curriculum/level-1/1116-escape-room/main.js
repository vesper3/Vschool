// Required
const readline = require("readline-sync");

// Keep the game running while isRunning is true
var isRunning = true;

while (isRunning) {
    console.log(
        "######################\n" +
        "#                    #\n" +
        "#    SURVIVAL GAME   #\n" +
        "#                    #\n" +
        "######################\n" +
        "1. Start Game\n" +
        "2. Exit\n" 
    );

    const input = readline.questionInt("Choose an option: ");

    if (input === 1) {
        var keyFound = false;
        var escaped = false;

        console.log(
            "You find yourself locked in a room and you don't know how you got there.\n" +
            "After the shock of waking up in an unfimiliar place, you begin to notice your surroundings.\n" +
            "You are in a dimly lit apartment room furnished with 1960 decor. There is an odd hole in the wall.\n" +
            "There are no windows, just a door, a table, and that weird hole.\n" +
            "There is a note on the table that says'FIND THE KEY'.\n"
        );

        while (keyFound === false) {
            console.log(
                "1. Find the key\n" +
                "2. Put hand in hole\n" +
                "3. Open the door\n"
            );

            const input = readline.questionInt("What will you do?: ");

            switch (input) {
                case 1: 
                    keyFound = true;
                    console.log("You find the key!\n");
                    break;
                case 2:
                    console.log("You bravely put your hand in the hole, but it gets chopped off and you die.\n");
                    readline.keyInPause("Press any key to exit...");
                    process.exit(0);
                case 3:
                    console.log("You try to open the door but it doesn't budge. I think you need to find the key.\n");
                    break;
            }
        }

        while (keyFound === true & escaped === false) {
            console.log(
                "1. Put hand in hole\n" +
                "2. Open the door\n"
            );

            const input = readline.questionInt("What will you do?: ");

            switch (input) {
                case 1:
                    console.log("You bravely put your hand in the hole, but it gets chopped off and you die.\n");
                    readline.keyInPause("Press any key to exit...");
                    process.exit(0);
                case 2:
                    console.log("You stick the key in the door and after turning it hear a loud thud. The door opens and you escape!\n");
                    escaped = true;
                    break;
            }
        }  
    }
    else if (input === 2) {
        isRunning = false;
    }
}
