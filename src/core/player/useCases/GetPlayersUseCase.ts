import { Player } from '../entities/Player';
import { PlayerRepository } from '../repositories/PlayerRepository';

export class GetPlayerUseCase {
  private playerRepository: PlayerRepository;

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository;
  }

  execute(): Promise<Player[]> {
    return this.playerRepository.getAll();
  }
}
