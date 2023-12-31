import Monk from "./src/Monk.js";
import Warrior from "./src/Warrior.js";
import Ninja from "./src/Ninja.js";
import Wizard from "./src/Wizard.js";
function generalAttack(type, attack) {
   return `o ${type} atacou usando ${attack}`
}


let heroNames = ["Dumbledore", "Bruce Lee", "Dux", "Daffy Duck", "Tyrion", "Lancelot", "Arthur", "Vallum Aelium"];

const numberHeros = getRandomInt(7) + 1;
let heros = new Array(numberHeros);

let nameHero;
let questHero;
let hero;
let i;
let age;

for(i=0;i<numberHeros;i++){
   nameHero = heroNames[ getRandomInt(heroNames.length) ]
   questHero = getRandomInt(4)
   age = getRandomInt(120)+1
   if (questHero==0){
      hero = new Ninja(nameHero, age)
   } else if (questHero == 1) {
      hero = new Monk(nameHero, age);
   } else if (questHero == 2) {
      hero = new Wizard(nameHero, age);
   } else{
      hero = new Warrior(nameHero, age);
   }
   heros[i] = hero;
}

heros.forEach(hero => {
   console.log(hero.attack());
});

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

