export class TeamRequest {
    name:string;
    teamType:string;
    score:number;
    constructor(name:string,teamType:string,score:number) {
        this.name = name;
        this.score = score;
        this.teamType = teamType;
    }
    
}