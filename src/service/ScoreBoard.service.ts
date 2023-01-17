
import { Team } from '../domain/Team';
import { Score } from '../domain/Score';

export class ScoreBoard {

    constructor() {
    }

    startNewGame(homeTeam:Team,awayTeam:Team): void {

        let scoreZero = new Score(0);
        homeTeam.setScore(scoreZero);
        awayTeam.setScore(scoreZero);
    }
}