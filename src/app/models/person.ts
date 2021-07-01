import { MoyenDeDeplacement } from "./moyen-de-deplacement";
import { Velo } from "./velo";
import { Voiture } from "./voiture";

export class Person {
  constructor(moyenParDefaut: MoyenDeDeplacement) {}

  seDeplacer(moyenDeplacement: MoyenDeDeplacement) {
    moyenDeplacement.avancer();
  }
}


const person = new Person(new Velo());

person.seDeplacer(new Voiture());
person.seDeplacer(new Velo());
