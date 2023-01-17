"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(name, teamType) {
        this.name = name;
        this.teamType = teamType;
    }
    getScore() {
        return this.score;
    }
    setScore(score) {
        this.score = score;
    }
    getType() {
        return this.teamType;
    }
    getName() {
        return this.name;
    }
    isEqualTo(team) {
        return team.getName() == this.getName() && team.getType().toString == this.getType().toString;
    }
}
exports.Team = Team;
