import { TeamType } from '../model/TeamType';
import { Team } from '../model/Team';
import { TeamRequest} from '../client/TeamRequest';

export class TeamMapper {

    constructor() {
    }

    mapToTeam(teamDto:TeamRequest): Team{
        return new Team(teamDto.name,(<any>TeamType)[teamDto.teamType])
    }
    
}