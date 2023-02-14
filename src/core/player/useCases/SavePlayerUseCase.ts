import { Player } from '../entities/Player';
import { PlayerRepository } from '../repositories/PlayerRepository';

export class SavePlayerUseCase {
  private playerRepository: PlayerRepository;

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository;
  }

  execute(player: Player):Promise<Player[]> {
    return this.playerRepository.savePlayer(player);
  }
}