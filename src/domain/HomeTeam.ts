export class HomeTeam {
    score : number = 0;

    constructor() {
    }

    getScore(): number {
        return this.score;
    }

    setScore(score:number): void {
        this.score = score;
    }
}