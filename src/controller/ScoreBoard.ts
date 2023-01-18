
import { Game } from '../model/Game';
import { Score } from '../model/Score';
import { TeamMapper } from '../mapper/TeamMapper';
import { TeamRequest } from '../client/TeamRequest';

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
        let game = new Game(awayTeam,homeTeam);
        game.setStartTime(new Date());
        this.games.push(game);
    }

    updateScore(homeTeamScoreRequest:TeamRequest,awayTeamScoreRequest:TeamRequest):void{
        let teamMapper = new TeamMapper();
        let homeTeam= teamMapper.mapToTeam(homeTeamScoreRequest);
        let awayTeam= teamMapper.mapToTeam(awayTeamScoreRequest);
        homeTeam.setScore(new Score(homeTeamScoreRequest.score));
        awayTeam.setScore(new Score(awayTeamScoreRequest.score));
        let game = new Game(awayTeam,homeTeam);
        const index = this.games.findIndex((g: Game) => g.isEqual(game));
        this.games = [...this.games.slice(0, index), game, ...this.games.slice(index + 1)];
    }

    finishGame(homeTeamScoreRequest:TeamRequest,awayTeamScoreRequest:TeamRequest):void{
        let teamMapper = new TeamMapper();
        let homeTeam= teamMapper.mapToTeam(homeTeamScoreRequest);
        let awayTeam= teamMapper.mapToTeam(awayTeamScoreRequest);
        let game = new Game(awayTeam,homeTeam);
        const index = this.games.findIndex((g: Game) => g.isEqual(game));
        if (index > -1) {
            this.games.splice(index, 1);
         }
    }

    getGames(): Game[]{
        return this.games;
    }
}