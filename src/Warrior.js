import { generalAttack } from "./General.js";
export default class Warrior {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   attack() {
      return generalAttack("guerreiro", "espada")
   }
}
