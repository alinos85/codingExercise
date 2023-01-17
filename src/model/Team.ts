import { Score } from './Score';
import { TeamType } from './TeamType';

export class Team {
    private score : Score ;
    private name: String;
    private teamType:TeamType

    constructor(name:String,teamType:TeamType) {
        this.name=name;
        this.teamType=teamType;
    }

    getScore(): Score {
        return this.score;
    }

    setScore(score:Score): void {
        this.score = score;
    }

    getType():TeamType{
        return this.teamType;
    }

    getName():String {
        return this.name;
    }

    isEqualTo(team:Team):boolean{
        return team.getName() == this.getName() && team.getType().toString == this.getType().toString

    }
}