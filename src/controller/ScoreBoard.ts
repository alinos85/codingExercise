
import { Team } from '../model/Team';
import { Game } from '../model/Game';
import { Score } from '../model/Score';
import { TeamMapper } from '../mapper/TeamMapper';
import { TeamRequest } from '../client/TeamRequest';

export class ScoreBoard {

    private games:Game[] = [];

    constructor() {
    }

    startNewGame(homeTeamDto:TeamRequest,awayTeamDto:TeamRequest): void {

        let scoreZero = new Score(0);
        let teamMapper = new TeamMapper();
        let homeTeam= teamMapper.mapToTeam(homeTeamDto);
        let awayTeam= teamMapper.mapToTeam(awayTeamDto);
        homeTeam.setScore(scoreZero);
        awayTeam.setScore(scoreZero);
        let game = new Game(awayTeam,homeTeam);
        this.games.push(game);
    }

    getGames(): Game[]{
        return this.games;
    }
}