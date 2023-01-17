import {describe, expect, test, beforeEach} from '@jest/globals';
import { HomeTeam } from '../../src/model/HomeTeam';
import { AwayTeam } from '../../src/model/AwayTeam';
import { Game } from '../../src/model/Game';
import { ScoreBoardSummary } from '../../src/model/ScoreBoardSummary';

const HOMETEAM:string= 'home team';
const AWAYTEAM:string= 'away team'

describe('Add game to the board', () => {

  let scoreBoardSummary:ScoreBoardSummary;

  beforeEach(() => {
    scoreBoardSummary=new ScoreBoardSummary();
  });
  
  test('the game should be added', () => {
    let homeTeam = new HomeTeam(HOMETEAM);
    let awayTeam = new AwayTeam(AWAYTEAM);
    let newGame = new Game(awayTeam,homeTeam);

    scoreBoardSummary.addGame(homeTeam,awayTeam);

    expect(scoreBoardSummary.getGames().length).toBe(1);
    expect(scoreBoardSummary.getGames()[0].isEqual(newGame)).toBe(true);
  });
});