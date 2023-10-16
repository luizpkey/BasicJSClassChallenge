import { generalAttack } from "./General.js";
export default class Ninja {
   constructor(name) {
      this.name = name;
   }
   attack() {
      return generalAttack("ninja", "shuriken")
   }
}