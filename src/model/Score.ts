export class Score {
    private scoreValue : number|undefined;

    constructor(score?:number) {
        this.scoreValue=score;
    }

    getScoreValue():number|undefined{
        return this.scoreValue;
    }

    isEqualTo (score:Score): boolean {
        return this.scoreValue === score.getScoreValue();
    }

}