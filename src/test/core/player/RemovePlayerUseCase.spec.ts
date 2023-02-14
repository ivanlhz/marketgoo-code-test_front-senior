import { RemovePlayerUseCase } from '@/core/player/useCases/RemovePlayerUseCase';
import { DummyRepository } from '../../fixtures';

describe('RemovePlayerUseCase', () => {
  it('Runs the repository remove method', async () => {
    const getPlayer = new RemovePlayerUseCase(new DummyRepository());
    const data = await getPlayer.execute('');
    expect(data).toBeTruthy()
  });
});