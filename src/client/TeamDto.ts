export class TeamDto {
    
    teamType:string;
    name:string
    constructor(name:string,teamType:string) {
        this.name = name;
        this.teamType = teamType
    }
    
}