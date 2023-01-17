import { Team } from '../model/Team';
import { TeamRequest } from '../client/TeamRequest';
export declare class TeamMapper {
    constructor();
    mapToTeam(teamDto: TeamRequest): Team;
}
