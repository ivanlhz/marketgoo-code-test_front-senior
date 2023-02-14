import { Player } from "@/core/player/entities/Player";
import { PlayerRepository } from "@/core/player/repositories/PlayerRepository";
import axios from "axios";

export type SavePlayerDTO = {
    "name": string,
    "team": string,
    "score": string
  }
const ENDPOINT = 'http://localhost:3000';

export class PlayerApiRepository implements PlayerRepository {
    async getAll(): Promise<Player[]> {
        const jsonResult = await axios.get(`${ENDPOINT}/players`)
        if (jsonResult.data && jsonResult.data.data) {
            return jsonResult.data.data
        } else {
            return []
        }
    }
    async removePlayerById(id: string): Promise<boolean> {
        const jsonResult = await  axios.delete(`${ENDPOINT}/players/${id}`)
        if (jsonResult.data && jsonResult.data.status) {
            return jsonResult.data.status === 'ok'
        } else {
            throw new Error("Error trying to remove player");
        }
    }
    async savePlayer<SavePlayerDTO>(player: Player): Promise<SavePlayerDTO> {
        const jsonResult = await axios.post(`${ENDPOINT}/players`, player)
        if (jsonResult.data && jsonResult.data.data) {
            return jsonResult.data.data
        } else {
            throw new Error("Error trying to save player");
        }
    }
}