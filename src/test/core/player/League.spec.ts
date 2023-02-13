import { League } from '@/core/player/entities/League';
import { PLAYER } from '../../fixtures';


describe('League entity', () => {
  it('Should return empty array of player', () => {
    const league = new League([]);
    expect(league.players).toHaveLength(0)
  });
  it('Should return an array of player', () => {
    const league = new League([PLAYER]);
    expect(league.players).toHaveLength(1)
    expect(league.players[0]).toEqual(PLAYER)
  });
});
