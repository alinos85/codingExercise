"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMapper = void 0;
const TeamType_1 = require("../model/TeamType");
const Team_1 = require("../model/Team");
class TeamMapper {
    constructor() {
    }
    mapToTeam(teamDto) {
        return new Team_1.Team(teamDto.name, TeamType_1.TeamType[teamDto.teamType]);
    }
}
exports.TeamMapper = TeamMapper;
