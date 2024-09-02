// Enemy.js
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

module.exports = Enemy; // Export the Enemy class
