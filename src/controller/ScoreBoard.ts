
import { Game } from '../model/Game';
import { Score } from '../model/Score';
import { TeamMapper } from '../mapper/TeamMapper';
import { TeamRequest } from '../client/TeamRequest';
import { ScoreRequest } from '../client/ScoreRequest';

export class ScoreBoard {

    private games:Game[] = [];

    constructor() {
    }

    startNewGame(homeTeamRequest:TeamRequest,awayTeamRequest:TeamRequest): void {

        let scoreZero = new Score(0);
        let teamMapper = new TeamMapper();
        let homeTeam= teamMapper.mapToTeam(homeTeamRequest);
        let awayTeam= teamMapper.mapToTeam(awayTeamRequest);
        homeTeam.setScore(scoreZero);
        awayTeam.setScore(scoreZero);
        let game = new Game(awayTeam,homeTeam,new Date());
        this.games.push(game);
    }

    updateScore(homeTeamScoreRequest:ScoreRequest,awayTeamScoreRequest:ScoreRequest):void{


    }

    getGames(): Game[]{
        return this.games;
    }
}