export class Score {
    private scoreValue : number ;

    constructor(score:number) {
        this.scoreValue=score;
    }

    getScoreValue():number{
        return this.scoreValue;
    }

    isEqualTo (score:Score): boolean {
        return this.scoreValue === score.getScoreValue();
    }

}