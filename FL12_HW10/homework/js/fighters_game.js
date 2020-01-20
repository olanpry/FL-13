function Fighter(obj) {
  let wins = 0;
  let loses = 0;
  const CTO = 100;
  const totalHp = obj.hp;
  this.getName = () => obj.name;
  this.getDamage = () => obj.damage;
  this.getStrength = () => obj.strength;
  this.getAgility = () => obj.agility;
  this.getHealth = () => obj.hp;
  this.addWin = () => wins++;
  this.addLoss = () => loses++;
  this.logCombatHistory = () =>
    console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${loses}`);
  this.dealDamage = function(damage) {
    obj.hp < 0 ? obj.hp = 0 : obj.hp -= damage;
  };
  this.heal = function(hp) {
    hp + obj.hp > totalHp ? obj.hp = totalHp : obj.hp += hp;
  };
  this.attack = function(defender) {
    let probability = (CTO - (defender.getStrength() + defender.getAgility())) / CTO;
    if (Math.random() < probability) {
      defender.dealDamage(this.getDamage());
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  };
}
function battle(fight1, fight2) {
  let winner;
  let looser;
  if (fight1.getHealth() <= 0 || fight2.getHealth() <= 0) {
    fight1.getHealth() > fight2.getHealth() ? looser = fight2 : looser = fight1;
    console.log(`${looser.getName()} is dead and can't fight!`);
  } else {
    while ((fight1.getHealth() && fight2.getHealth()) > 0) {
      fight1.attack(fight2);
      if ((fight1.getHealth() && fight2.getHealth()) > 0) {
        fight2.attack(fight1);
      }
    }
    if (fight1.getHealth() > fight2.getHealth()) {
      winner = fight1;
      looser = fight2;
    } else {
      winner = fight2;
      looser = fight1;
    }
    console.log(`${winner.getName()} has won!`);
    winner.addWin();
    looser.addLoss();
  }
}
