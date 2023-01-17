import { Score } from './Score';

export class Team {
    private score : Score ;
    private name: String;

    constructor(name:String) {
        this.name=name
    }

    getScore(): Score {
        return this.score;
    }

    setScore(score:Score): void {
        this.score = score;
    }

    getName():String {
        return this.name;
    }
}