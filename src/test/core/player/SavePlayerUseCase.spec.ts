import { SavePlayerUseCase } from '@/core/player/useCases/SavePlayerUseCase';
import { DummyRepository, PLAYER2 } from '../../fixtures';

describe('SavePlayerUseCase', () => {
  it('Runs the repository save method', async () => {
    const getPlayer = new SavePlayerUseCase(new DummyRepository());
    const data = await getPlayer.execute(PLAYER2);
    expect(data).toHaveLength(2);
    expect(data[1]).toEqual(PLAYER2)
  });
});