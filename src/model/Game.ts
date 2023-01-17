
import { Team } from './Team';

export class Game {
    private awayTeam : Team ;
    private homeTeam : Team ;
    private startTime: Date ;  

    constructor(awayTeam : Team, homeTeam : Team, startTime: Date ) {
        this.awayTeam=awayTeam;
        this.homeTeam=homeTeam;
        this.startTime=startTime;
    }

    getAwayTeam(): Team {
        return this.awayTeam;
    }

    getHomeTeam(): Team {
        return this.homeTeam;
    }

    getSatartTime(): Date {
        return this.startTime;
    }

    isEqual(game:Game): boolean{
        return game.getAwayTeam().isEqualTo(this.awayTeam)
         && game.getHomeTeam().isEqualTo(this.homeTeam)
         && game.getSatartTime().getTime() === this.startTime.getTime();
    }
}