import { HomeTeam } from './HomeTeam';
import { AwayTeam } from './AwayTeam';

export class Game {
    private awayTeam : AwayTeam ;
    private homeTeam : HomeTeam ;

    constructor(awayTeam : AwayTeam, homeTeam : HomeTeam ) {
        this.awayTeam=awayTeam;
        this.homeTeam=homeTeam;
    }

    getAwayTeam(): AwayTeam {
        return this.awayTeam;
    }

    getHomeTeam(): HomeTeam {
        return this.homeTeam;
    }

    isEqual(game:Game): boolean{
        return game.getAwayTeam().isEqualTo(this.awayTeam) && game.getHomeTeam().isEqualTo(this.homeTeam);
    }
}