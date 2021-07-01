import { MoyenDeDeplacement } from "./moyen-de-deplacement";

export class Voiture implements MoyenDeDeplacement {
  avancer(): void {
    console.info('vroom ttutu');
  }

}
