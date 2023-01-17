import { Team } from './Team';
import { TeamType } from './TeamType';

export class AwayTeam extends Team {
    private teamType:TeamType

    constructor(
        name: string
        ) {
        
        // call the constructor of the Person class:
        super(name);
        this.teamType=TeamType.Away
    }

    getType():TeamType{
        return this.teamType;
    }

    isEqualTo(awayTeam:AwayTeam):boolean{
        return awayTeam.getName() == this.getName() && awayTeam.getType().toString == this.getType().toString

    }
    
}