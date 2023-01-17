import { Score } from './Score';

export class Team {
    private score : Score ;

    constructor() {
    }

    getScore(): Score {
        return this.score;
    }

    setScore(score:Score): void {
        this.score = score;
    }
}