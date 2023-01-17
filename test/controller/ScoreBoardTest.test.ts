import {describe, expect, test, beforeEach} from '@jest/globals';
import { HomeTeam } from '../../src/model/HomeTeam';
import { AwayTeam } from '../../src/model/AwayTeam';
import { Game } from '../../src/model/Game';
import { Score } from '../../src/model/Score';
import { ScoreBoard } from '../../src/controller/ScoreBoard';

const HOMETEAM:string= 'home team';
const AWAYTEAM:string= 'away team'

describe('When starting new game', () => {

  let scoreBoard:ScoreBoard;

  beforeEach(() => {
    scoreBoard=new ScoreBoard();
  });
  test('score should be initialize 0-0 between 2 teams', () => {
    let homeTeam = new HomeTeam(HOMETEAM);
    let awayTeam = new AwayTeam(AWAYTEAM);
    let scoreZero = new Score(0);

    scoreBoard.startNewGame(homeTeam,awayTeam);

    expect(homeTeam.getScore().isEqualTo(scoreZero)).toBe(true);
    expect(homeTeam.getScore().isEqualTo(scoreZero)).toBe(true);
  });

  test('New game should be added to the scoreboard', () => {
    let homeTeam = new HomeTeam(HOMETEAM);
    let awayTeam = new AwayTeam(AWAYTEAM);
    let newGame = new Game(awayTeam,homeTeam);

    scoreBoard.startNewGame(homeTeam,awayTeam);

    expect(scoreBoard.getGames().length).toBe(1);
    expect(scoreBoard.getGames()[0].isEqual(newGame)).toBe(true);
  });
});