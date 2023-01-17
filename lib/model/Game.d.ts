import { Team } from './Team';
export declare class Game {
    private awayTeam;
    private homeTeam;
    constructor(awayTeam: Team, homeTeam: Team);
    getAwayTeam(): Team;
    getHomeTeam(): Team;
    isEqual(game: Game): boolean;
}
