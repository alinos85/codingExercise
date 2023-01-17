
import { Team } from './Team';

export class Game {
    private awayTeam : Team ;
    private homeTeam : Team ;

    constructor(awayTeam : Team, homeTeam : Team ) {
        this.awayTeam=awayTeam;
        this.homeTeam=homeTeam;
    }

    getAwayTeam(): Team {
        return this.awayTeam;
    }

    getHomeTeam(): Team {
        return this.homeTeam;
    }

    isEqual(game:Game): boolean{
        return game.getAwayTeam().isEqualTo(this.awayTeam) && game.getHomeTeam().isEqualTo(this.homeTeam);
    }
}