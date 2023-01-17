import { HomeTeam } from '../domain/HomeTeam';
import { AwayTeam } from '../domain/AwayTeam';

export class ScoreBoard {

    constructor() {
    }

    startNewGame(homeTeam:HomeTeam,awayTeam:AwayTeam): void {
        homeTeam.setScore(0);
        awayTeam.setScore(0);
    }
}