export class Score {
    private scoreValue : number|null ;

    constructor(score:number|null) {
        this.scoreValue=score;
    }

    getScoreValue():number|null{
        return this.scoreValue;
    }

    isEqualTo (score:Score): boolean {
        return this.scoreValue === score.getScoreValue();
    }

}