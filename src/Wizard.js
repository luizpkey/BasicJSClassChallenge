import { generalAttack } from "./General.js";
export default class Wizard {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   attack() {
      return generalAttack("mago", "magia")
   }
}