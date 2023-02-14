import { PlayerRepository } from '../repositories/PlayerRepository';

export class RemovePlayerUseCase {
  private playerRepository: PlayerRepository;

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository;
  }

  execute(id:string): Promise<boolean> {
    return this.playerRepository.removePlayerById(id);
  }
}