import { Score } from './Score';
import { TeamType } from './TeamType';
export declare class Team {
    private score;
    private name;
    private teamType;
    constructor(name: String, teamType: TeamType);
    getScore(): Score;
    setScore(score: Score): void;
    getType(): TeamType;
    getName(): String;
    isEqualTo(team: Team): boolean;
}
