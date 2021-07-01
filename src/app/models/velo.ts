import { MoyenDeDeplacement } from "./moyen-de-deplacement";

export class Velo implements MoyenDeDeplacement {
  avancer(): void {
    console.info('a bicyclette .....');
  }

}
