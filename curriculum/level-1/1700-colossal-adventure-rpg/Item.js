// Item.js
class Item {
  constructor(name, healing = 0, damage = 0) {
    this.name = name;
    this.healing = healing;
    this.damage = damage;
  }

  use(target) {
    if (this.name === "Healing Potion") {
      console.log(`\n${target.name} uses ${this.name} and heals for ${this.healing} HP!`);
      target.heal(this.healing);
    } else if (this.name === "Fire Potion") {
      console.log(`\n${target.name} uses ${this.name} on the enemy for ${this.damage} damage!`);
      target.takeDamage(this.damage);
    } else if (this.name === "Mysterious Potion") {
      const newHp = Math.floor(Math.random() * target.hp) + 1; // Random HP between 1 and max HP
      target.hp = newHp;
      console.log(`\n${target.name} drinks the Mysterious Potion! Their HP is now ${newHp}!`);
    } else {
      console.log(`${this.name} doesn't seem to do anything.`);
    }
  }
}

module.exports = Item; // Export the Item class
