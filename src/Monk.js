import { generalAttack } from "./General.js";

export default class Monk {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   attack() {
      return generalAttack("monge", "artes marciais")
   }
}