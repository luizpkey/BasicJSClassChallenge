import { generalAttack } from "./General.js";
export default class Wizard {
   constructor(name) {
      this.name = name;
   }
   attack() {
      return generalAttack("mago", "magia")
   }
}