import { Player } from '@/core/player/entities/Player';
import { PlayerRepository } from '@/core/player/repositories/PlayerRepository';

export const PLAYERLIST = {
  status: 'ok',
  data: [
    {
      id: 1,
      name: 'Peter',
      team: 'Pandas',
      score: 5,
      createdAt: '2020-05-28 11:32:54.506 +00:00',
      updatedAt: '2020-05-28 11:32:54.506 +00:00'
    },
    {
      id: 2,
      name: 'Jhon',
      team: 'Cobrakay',
      score: 8,
      createdAt: '2020-05-28 11:32:54.507 +00:00',
      updatedAt: '2020-05-28 11:32:54.507 +00:00'
    }
  ]
};

export const PLAYER: Player = {
  id: '1',
  name: 'Peter',
  team: 'Pandas',
  score: 5,
  createdAt: new Date('2020-05-28 11:32:54.506 +00:00'),
  updatedAt: new Date('2020-05-28 11:32:54.506 +00:00')
};

export const PLAYER2: Player = {
  id: '2',
  name: 'Jhon',
  team: 'Cobrakay',
  score: 8,
  createdAt: new Date('2020-05-28 11:32:54.506 +00:00'),
  updatedAt: new Date('2020-05-28 11:32:54.506 +00:00')
};

export class DummyRepository implements PlayerRepository {
  removePlayerById(): Promise<Player[]> {
    return Promise.resolve([]);
  }
  savePlayer(player: Player): Promise<Player[]> {
    return Promise.resolve([PLAYER, player])
  }
  getAll(): Promise<Player[]> {
    return Promise.resolve([PLAYER]);
  }
}
