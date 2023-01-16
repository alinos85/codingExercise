import {describe, expect, test} from '@jest/globals';

describe('When starting new game', () => {
  test('score should be initialize 0-0 between 2 teams', () => {
    let scoreBoard = new scoreBoard();
    let homeTeam = new HomeTeam();
    let awayTeam = new AwayTeam();

    scoreBoard.startNewGame(homeTeam,awayTeam);

    expect(homeTeam.getScore()).toBe(0);
    expect(homeTeam.getScore()).toBe(0);
  });
});