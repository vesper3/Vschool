// Enemy.js
class Enemy {
  constructor(name, hp, minDamage, maxDamage) {
    this.name = name;
    this.maxHP = hp;
    this.hp = hp;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
  }

  attack() {
    const damage = Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1)) + this.minDamage;
    console.log(`\n${this.name} strikes back for ${damage} damage!`);
    return damage;
  }

  takeDamage(damage) {
    this.hp -= damage;
    console.log(`Enemy HP: ${this.hp}`);
  }

  heal(amount) {
    this.hp += amount;
    
    if (this.hp > this.maxHP) {
      this.hp = this.maxHP;
    }
    
    console.log(`${this.name} gains ${amount} HP! HP: ${this.hp}\n`);
  }
}

module.exports = Enemy; // Export the Enemy class
