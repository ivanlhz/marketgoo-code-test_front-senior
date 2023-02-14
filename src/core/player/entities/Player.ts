type PlayerData = {
  name: string;
  team: string;
  score: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Player {
  readonly name: string;
  readonly team: string;
  readonly score: number;
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  
  constructor(player: PlayerData){
    this.id = player.id;
    this.name = player.name;
    this.team = player.team;
    this.score = player.score;
    this.createdAt = player.createdAt;
    this.updatedAt = player.updatedAt;
  }
}