"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(awayTeam, homeTeam) {
        this.awayTeam = awayTeam;
        this.homeTeam = homeTeam;
    }
    getAwayTeam() {
        return this.awayTeam;
    }
    getHomeTeam() {
        return this.homeTeam;
    }
    isEqual(game) {
        return game.getAwayTeam().isEqualTo(this.awayTeam) && game.getHomeTeam().isEqualTo(this.homeTeam);
    }
}
exports.Game = Game;
