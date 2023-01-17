"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreBoard = void 0;
const Game_1 = require("../model/Game");
const Score_1 = require("../model/Score");
const TeamMapper_1 = require("../mapper/TeamMapper");
class ScoreBoard {
    constructor() {
        this.games = [];
    }
    startNewGame(homeTeamDto, awayTeamDto) {
        let scoreZero = new Score_1.Score(0);
        let teamMapper = new TeamMapper_1.TeamMapper();
        let homeTeam = teamMapper.mapToTeam(homeTeamDto);
        let awayTeam = teamMapper.mapToTeam(awayTeamDto);
        homeTeam.setScore(scoreZero);
        awayTeam.setScore(scoreZero);
        let game = new Game_1.Game(awayTeam, homeTeam);
        this.games.push(game);
    }
    getGames() {
        return this.games;
    }
}
exports.ScoreBoard = ScoreBoard;
