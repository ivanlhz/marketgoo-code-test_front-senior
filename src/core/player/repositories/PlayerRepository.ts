import { Player } from '../entities/Player';

export interface PlayerRepository {
  getAll(): Promise<Player[]>;
  removePlayerById(id: string): Promise<boolean>;
  savePlayer: (player: Player) => Promise<any>;
}
