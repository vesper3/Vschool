// Player.js
class Player {
  constructor(name) {
    this.name = name;
    this.hp = 45;
    this.minDamage = 5;
    this.maxDamage = 15;
    this.inventory = [];
    this.enemiesKilled = 0;
  }

  attack() {
    const damage = Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1)) + this.minDamage; 
    console.log(`\n${this.name} attacks for ${damage} damage!`);
    return damage;
  }

  takeDamage(damage) {
    this.hp -= damage;
    console.log(`${this.name} takes ${damage} damage! HP: ${this.hp}`);
  }

  heal(amount) {
    this.hp += amount;
    
    if (this.hp > 50) {
      this.hp = 50;
    }

    console.log(`${this.name} gains ${amount} HP! HP: ${this.hp}\n`);
  }

  addToInventory(item) {
    this.inventory.push(item);
    console.log(`${this.name} found a ${item.name}!\n`);
  }
}

module.exports = Player; // Export the Player class
