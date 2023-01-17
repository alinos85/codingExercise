
import { Team } from '../model/Team';
import { Game } from '../model/Game';
import { Score } from '../model/Score';
import { AwayTeam } from '../model/AwayTeam';
import { HomeTeam } from '../model/HomeTeam';

export class ScoreBoard {

    private games:Game[] = [];

    constructor() {
    }

    startNewGame(homeTeam:HomeTeam,awayTeam:AwayTeam): void {

        let scoreZero = new Score(0);
        homeTeam.setScore(scoreZero);
        awayTeam.setScore(scoreZero);
        let game = new Game(awayTeam,homeTeam)
        this.games.push(game);
    }

    getGames(): Game[]{
        return this.games;
    }
}