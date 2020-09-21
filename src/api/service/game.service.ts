import { Game } from '../models/Game/Game';
import http from '../http';
class GameService {
  async findByName(name: string): Promise<Game[]> {
    return http.get<Game[]>(`games?name=${name}`).then((res) => res.data);
  }
}

export default new GameService();
