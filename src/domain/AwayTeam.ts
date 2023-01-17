export class AwayTeam {
    private score : number ;

    constructor() {
    }

    getScore(): number {
        return this.score;
    }

    setScore(score:number): void {
        this.score = score;
    }
}