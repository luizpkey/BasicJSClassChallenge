import { generalAttack } from "./General.js";
export default class Ninja {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   attack() {
      return generalAttack("ninja", "shuriken")
   }
}