import { Game } from '../model/Game';
import { TeamRequest } from '../client/TeamRequest';
export declare class ScoreBoard {
    private games;
    constructor();
    startNewGame(homeTeamDto: TeamRequest, awayTeamDto: TeamRequest): void;
    getGames(): Game[];
}
