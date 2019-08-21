import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class FighterShip extends SpaceShip {
  constructor(pilot: Pilot) {
    super('Unicorn', '/assets/iss-unicorn.png', pilot);
  }
}
