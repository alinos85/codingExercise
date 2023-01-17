import {describe, expect, test} from '@jest/globals';
import { HomeTeam } from '../src/domain/HomeTeam';
import { AwayTeam } from '../src/domain/AwayTeam';
import { ScoreBoard } from '../src/service/ScoreBoard.service';

describe('When starting new game', () => {
  test('score should be initialize 0-0 between 2 teams', () => {
    let scoreBoard = new ScoreBoard();
    let homeTeam = new HomeTeam();
    let awayTeam = new AwayTeam();
    let scoreZero = new Score(0);

    scoreBoard.startNewGame(homeTeam,awayTeam);

    expect(homeTeam.getScore().isEqualTo(scoreZero)).toBe(true);
    expect(homeTeam.getScore().isEqualTo(scoreZero)).toBe(true);
  });
});