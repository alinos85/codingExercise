export class TeamRequest {
    name:string;
    teamType:string;
    score:number|undefined;
    constructor(name:string,teamType:string,score?: number) {
        this.name = name;
        this.score = score;
        this.teamType = teamType;
    }
    
}