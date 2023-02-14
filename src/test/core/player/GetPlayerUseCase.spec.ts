import { GetPlayerUseCase } from '@/core/player/useCases/GetPlayersUseCase';
import { DummyRepository } from '../../fixtures';

describe('GetPlayerUseCase', () => {
  it('Runs the repository get method', async () => {
    const getPlayer = new GetPlayerUseCase(new DummyRepository());
    const data = await getPlayer.execute();
    expect(data).toHaveLength(1);
  });
});
