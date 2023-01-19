export class Score {
    private scoreValue : number|undefined;

    constructor(score?:number) {
        this.scoreValue=score;
    }

    getScoreValue():number{
        if(this.scoreValue !== undefined){
            return this.scoreValue
        }
        return 0;
    }

    isEqualTo (score:Score): boolean {
        return this.scoreValue === score.getScoreValue();
    }

}