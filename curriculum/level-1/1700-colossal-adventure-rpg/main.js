const readline = require('readline-sync');

// Player Class
class Player {
  constructor(name) {
    this.name = name;
    this.hp = 50;
    this.minDamage = 5;
    this.maxDamage = 15;
    this.inventory = [];
    this.enemiesKilled = 0;
  }

  attack() {
    const damage = Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1)) + this.minDamage; 
    console.log(`${this.name} attacks for ${damage} damage!`);
    return damage;
  }

  takeDamage(damage) {
    this.hp -= damage;
    console.log(`${this.name} takes ${damage} damage! HP: ${this.hp}`);
  }

  heal(amount) {
    this.hp += amount;
    console.log(`${this.name} gains ${amount} HP! HP: ${this.hp}`);
  }

  addToInventory(item) {
    this.inventory.push(item);
    console.log(`${this.name} found a ${item.name}!`);
  }
}

// Enemy Class
class Enemy {
  constructor(name, hp, minDamage, maxDamage) {
    this.name = name;
    this.hp = hp;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
  }

  attack() {
    const damage = Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1)) + this.minDamage;
    console.log(`${this.name} strikes back for ${damage} damage!`);
    return damage;
  }

  takeDamage(damage) {
    this.hp -= damage;
    console.log(`Enemy HP: ${this.hp}`);
  }
}

// Item Class
class Item {
  constructor(name, healing = 0, damage = 0) {
    this.name = name;
    this.healing = healing;
    this.damage = damage;
  }

  use(target) {
    if (this.name === "Healing Potion") {
      console.log(`${target.name} uses ${this.name} and heals for ${this.healing} HP!`);
      target.heal(this.healing);
    } else if (this.name === "Fire Potion") {
      console.log(`${target.name} uses ${this.name} on the enemy for ${this.damage} damage!`);
      target.takeDamage(this.damage);
    } else if (this.name === "Mysterious Potion") {
      const newHp = Math.floor(Math.random() * target.hp) + 1; // Random HP between 1 and max HP
      target.hp = newHp;
      console.log(`${target.name} drinks the Mysterious Potion! Their HP is now ${newHp}!`);
    } else {
      console.log(`${this.name} doesn't seem to do anything.`);
    }
  }
}

// Create Player and Enemy instances
const player = new Player(playerName);
let enemy = new Enemy("Goblin", 30, 5, 15); // Create an initial enemy

// Function to create a random enemy
function createRandomEnemy() {
  const enemyTypes = [
    { name: "Goblin", hp: 30, minDamage: 5, maxDamage: 10 },
    { name: "Wolf", hp: 25, minDamage: 3, maxDamage: 8 },
    { name: "Skeleton", hp: 40, minDamage: 7, maxDamage: 12 },
  ];

  const randomIndex = Math.floor(Math.random() * enemyTypes.length);
  const enemyData = enemyTypes[randomIndex];

  return new Enemy(enemyData.name, enemyData.hp, enemyData.minDamage, enemyData.maxDamage);
}

function createRandomItem() {
  const itemTypes = [
    { name: "Healing Potion", healing: 20, damage: 0 },
    { name: "Fire Potion", healing: 0, damage: 20 },
    { name: "Mysterious Potion", healing: 0, damage: 0 }, // special use 
  ];

  const randomIndex = Math.floor(Math.random() * itemTypes.length);
  const itemData = itemTypes[randomIndex];

  return new Item(itemData.name, itemData.healing, itemData.damage);
}


// Battle Function
function battle() {
  console.log("\nPrepare for battle! against " + enemy.name + "!\n");

  while (player.hp > 0 && enemy.hp > 0) {
    const choice = readline.question("Attack (a), use Item (i), or Run (r)?").toLowerCase();

    if (choice === 'a') {
      // Player Attacks
      const playerDamage = player.attack();
      enemy.takeDamage(playerDamage);

      if (enemy.hp <= 0) {
        console.log("\nYou vanquished the enemy!");
        player.enemiesKilled++;
        player.heal(15);
        player.addToInventory(createRandomItem());
        break;
      }

      // Enemy Attacks
      const enemyDamage = enemy.attack();
      player.takeDamage(enemyDamage);

      console.log("");

    } else if (choice === 'r') {
      // Attempt to Run
      if (Math.random() < 0.5) {
        console.log("You successfully escaped!\n");
        return true;
      } else {
        console.log("You couldn't get away!\n");
        const enemyDamage = enemy.attack();
        player.takeDamage(enemyDamage);
      }
    } else if (choice === 'i') {
      if (player.inventory.length > 0) {
        console.log("Inventory:");
        for (let i = 0; i < player.inventory.length; i++) {
          console.log(`${i + 1}. ${player.inventory[i].name}`);
        }

        const itemChoice = readline.questionInt("Enter the number of the item you want to use: ");

        if (itemChoice >= 1 && itemChoice <= player.inventory.length) {
          const selectedItem = player.inventory[itemChoice - 1];

          // Choose target for the item
          const targetChoice = readline.question("Use on (p)layer or (e)nemy? ").toLowerCase();
          if (targetChoice === 'p') {
            selectedItem.use(player);
            player.inventory.splice(itemChoice - 1, 1); // Remove the item from inventory
          } else if (targetChoice === 'e') {
            selectedItem.use(enemy);
            player.inventory.splice(itemChoice - 1, 1); // Remove the item from inventory
          } else {
            console.log("Invalid target choice.\n");
          }
        } else {
          console.log("Invalid item choice.\n");
        }
      } else {
        console.log("Your inventory is empty.\n");
      }

    } else {
      console.log("Invalid choice. Please enter 'a', 'i', or 'r'.\n");
    }
  }

  // Check for game over after battle
  if (player.hp <= 0) {
    console.log("\nA valiant effort, but you have fallen. Your legend ends here...\n");
    return false; // Indicate game over
  } else if (player.enemiesKilled >= 3) {
    console.log("\nCongratulations, you have triumphed over evil! You are a true hero!\n");
    return false; // Indicate game over
  }

  return true; // Game continues
}

console.log("Welcome to the world of EPIC RPG!\n");
const playerName = readline.question("Brave adventurer, what is your name? ");
console.log(`\nGreetings, ${playerName}! Your legend begins now...\n`);

// Game Loop
let isPlaying = true;
while (isPlaying) {
  const action = readline.question("Enter 'w' to walk, or 'p' to print your stats: ").toLowerCase();

  if (action === 'w') {
    console.log(`${playerName} walks cautiously through the wilderness...`);

    if (Math.random() < 1 / 3) {
      enemy = createRandomEnemy();
      isPlaying = battle();
    } else {
      console.log("All is quiet. You continue your journey.\n");
    }

  } else if (action === 'p' || action === 'print') {
    // Print player stats
    console.log("\n--- Player Stats ---");
    console.log(`Name: ${player.name}`);
    console.log(`HP: ${player.hp}`);

    console.log("Inventory:");
    if (player.inventory.length > 0) {
      for (let i = 0; i < player.inventory.length; i++) {
        console.log(`${i + 1}. ${player.inventory[i].name}`);
      }
    } else {
      console.log("Empty");
    }
    console.log("--------------------\n");

  } else {
    console.log("Invalid action. Please enter 'w' to walk or 'p' to print stats.\n");
  }
}
