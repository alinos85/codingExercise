
import { Game } from '../model/Game';
import { AwayTeam } from '../model/AwayTeam';
import { HomeTeam } from '../model/HomeTeam';

export class ScoreBoardSummary {

    private games:Game[] = [];

    constructor() {
    }

    addGame(homeTeam:HomeTeam,awayTeam:AwayTeam): void {

        let game = new Game(awayTeam,homeTeam)
        this.games.push(game);
    }

    getGames(): Game[]{
        return this.games;
    }
}