import { generalAttack } from "./General.js";
export default class Warrior {
   constructor(name) {
      this.name = name;
   }
   attack() {
      return generalAttack("guerreiro", "espada")
   }
}
