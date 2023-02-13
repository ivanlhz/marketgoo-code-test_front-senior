import { Player } from './Player';

export class League {
  players: readonly Player[];

  constructor(players: Player[]) {
    this.players = players;
  }
}
