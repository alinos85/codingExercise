export class TeamRequest {
    name:string;
    teamType:string;
    score:number|null;
    constructor(name:string,teamType:string,score:number|null) {
        this.name = name;
        this.score = score;
        this.teamType = teamType;
    }
    
}