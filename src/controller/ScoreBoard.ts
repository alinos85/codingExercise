
import { Team } from '../model/Team';
import { Game } from '../model/Game';
import { Score } from '../model/Score';
import { AwayTeam } from '../model/AwayTeam';
import { HomeTeam } from '../model/HomeTeam';
import { TeamMapper } from '../mapper/TeamMapper';
import { TeamDto } from '../client/TeamDto';

export class ScoreBoard {

    private games:Game[] = [];

    constructor() {
    }

    startNewGame(homeTeamDto:TeamDto,awayTeamDto:TeamDto): void {

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