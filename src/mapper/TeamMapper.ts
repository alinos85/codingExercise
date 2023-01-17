import { TeamType } from '../model/TeamType';
import { Team } from '../model/Team';
import { TeamDto} from '../client/TeamDto';

export class TeamMapper {

    constructor() {
    }

    mapToTeam(teamDto:TeamDto): Team{
        return new Team(teamDto.name,(<any>TeamType)[teamDto.teamType])
    }
    
}