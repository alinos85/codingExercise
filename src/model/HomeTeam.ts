import { Team } from './Team';
import { TeamType } from './TeamType';

export class HomeTeam extends Team {
    private teamType:TeamType

    constructor(
        name: string
        ) {
        super(name);
        this.teamType=TeamType.Home
    }

    getType():TeamType{
        return this.teamType;
    }

    isEqualTo(homeTeam:HomeTeam):boolean{
        return homeTeam.getName() == this.getName() && homeTeam.getType().toString == this.getType().toString

    }
    
}