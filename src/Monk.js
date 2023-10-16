import { generalAttack } from "./General.js";

export default class Monk {
   constructor(name){
      this.name=name;
   }
   attack() {
      return generalAttack("monge", "artes marciais")
   }
}