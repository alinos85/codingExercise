"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
class Score {
    constructor(score) {
        this.scoreValue = score;
    }
    getScoreValue() {
        return this.scoreValue;
    }
    isEqualTo(score) {
        return this.scoreValue === score.getScoreValue();
    }
}
exports.Score = Score;
