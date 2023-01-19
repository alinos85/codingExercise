
import { Game } from '../model/Game';
import { Score } from '../model/Score';
import { TeamMapper } from '../mapper/TeamMapper';
import { TeamRequest } from '../client/TeamRequest';

export class ScoreBoard {

    private games:Game[] = [];
    private static timePrecision:number= 0

    constructor() {
        ScoreBoard.timePrecision=ScoreBoard.timePrecision+0.0001
    }

    startNewGame(homeTeamRequest:TeamRequest,awayTeamRequest:TeamRequest): void {

        let scoreZero = new Score(0);
        let teamMapper = new TeamMapper();
        let homeTeam= teamMapper.mapToTeam(homeTeamRequest);
        let awayTeam= teamMapper.mapToTeam(awayTeamRequest);
        homeTeam.setScore(scoreZero);
        awayTeam.setScore(scoreZero);
        let game = new Game(awayTeam,homeTeam);
        let currentTime = new Date()
        game.setStartTime((currentTime.getTime()) + ScoreBoard.timePrecision);
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

    getGamesSummary():Game[]{
        this.games.sort((g1,g2) => this.orderTwoGames(g1,g2));
        return this.games;
    }

    orderTwoGames(game1:Game,game2:Game):number{
        if (game2.getTotalScore() == game1.getTotalScore()) {
           return game2.getSatartTime() - game1.getSatartTime();
        }
        return game2.getTotalScore()- game1.getTotalScore();
    }

    getGames(): Game[]{
        return this.games;
    }
}