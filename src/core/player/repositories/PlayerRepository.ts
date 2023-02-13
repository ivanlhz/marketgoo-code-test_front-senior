import { Player } from '../entities/Player';

export interface PlayerRepository {
  getAll(): Promise<Player[]>;
  removePlayerById(id: string): Promise<Player[]>;
  savePlayer(player: Player): Promise<Player[]>;
}
