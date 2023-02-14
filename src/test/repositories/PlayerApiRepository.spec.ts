import { PlayerApiRepository } from '@/repositories/PlayerAPIRepository';
import axios from 'axios';
import { PLAYER, PLAYERLIST } from '../fixtures';

describe('PlayerApiRepository', () => {
  it('Should be call axios get when call the getAll method', () => {
    const func = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: PLAYERLIST }));
    const repo = new PlayerApiRepository();
    repo.getAll();
    expect(func).toHaveBeenCalledTimes(1);
  });
  it('Should return empty array if getAll method fails', async () => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ PLAYERLIST }));
    const repo = new PlayerApiRepository();
    const result = await repo.getAll();
    expect(result).toEqual([]);
  });
  it('Should be call axios remove when call the remove method', () => {
    const func = jest.spyOn(axios, 'delete').mockImplementation(() => Promise.resolve(true));
    const repo = new PlayerApiRepository();
    repo.removePlayerById('');
    expect(func).toHaveBeenCalledTimes(1);
  });
  it('Should be true when remove response status is "ok"', async() => {
    jest.spyOn(axios, 'delete').mockImplementation(() => Promise.resolve({data:{status: "ok"}}));
    const repo = new PlayerApiRepository();
    const response = await repo.removePlayerById('');
    expect(response).toBeTruthy()
  });
  it('Should be call axios save when call the save method', () => {
    const func = jest
      .spyOn(axios, 'post')
      .mockImplementation(() => Promise.resolve({ data: PLAYERLIST }));
    const repo = new PlayerApiRepository();
    repo.savePlayer(PLAYER);
    expect(func).toHaveBeenCalledTimes(1);
  });
  it('Should throw an error if save method fails', async () => {
    jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve('test'));
    const repo = new PlayerApiRepository();
    try {
        await repo.savePlayer(PLAYER);
    } catch (error) {
        expect(error).toBeTruthy()
    }
  });
});
