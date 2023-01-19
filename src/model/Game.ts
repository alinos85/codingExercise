
import { Team } from './Team';

export class Game {
    private awayTeam : Team ;
    private homeTeam : Team ;
    private startTime: number ;  //time in millisecond

    constructor(awayTeam : Team, homeTeam : Team) {
        this.awayTeam=awayTeam;
        this.homeTeam=homeTeam;
    }

    getAwayTeam(): Team {
        return this.awayTeam;
    }

    getHomeTeam(): Team {
        return this.homeTeam;
    }

    getSatartTime(): number {
        return this.startTime;
    }

    setStartTime(startTime:number){
        this.startTime = startTime;
    }

    isEqual(game:Game): boolean{
        return game.getAwayTeam().isEqualTo(this.awayTeam)
         && game.getHomeTeam().isEqualTo(this.homeTeam)
    }

    getTotalScore():number{
        return this.getAwayTeam().getTeamScoreValue()+this.getHomeTeam().getTeamScoreValue();
    }
}