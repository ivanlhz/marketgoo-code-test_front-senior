import { Player } from '../entities/Player';
import { PlayerRepository } from '../repositories/PlayerRepository';

export class RemovePlayerUseCase {
  private playerRepository: PlayerRepository;

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository;
  }

  execute(id:string): Promise<Player[]> {
    return this.playerRepository.removePlayerById(id);
  }
}