import {describe, expect, test, beforeEach} from '@jest/globals';
import { TeamDto } from '../../src/client/TeamDto';
import { Game } from '../../src/model/Game';
import { Score } from '../../src/model/Score';
import { ScoreBoard } from '../../src/controller/ScoreBoard';

const HOMETEAM:string= 'home team';
const AWAYTEAM:string= 'away team';
const HOMETEAMTYPE:string= 'Home';
const AWAYTEAMTYPE:string= 'Away';

describe('When starting new game', () => {

  let scoreBoard:ScoreBoard;

  beforeEach(() => {
    scoreBoard=new ScoreBoard();
  });
  test('score should be initialize to 0-0 and New game added to the scoreboard', () => {
    let homeTeamDto = new TeamDto(HOMETEAM,HOMETEAMTYPE);
    let awayTeamDto = new TeamDto(AWAYTEAM,AWAYTEAMTYPE);
    let scoreZero = new Score(0);

    scoreBoard.startNewGame(homeTeamDto,awayTeamDto);

    expect(scoreBoard.getGames().length).toBe(1);

    
    let newGame = scoreBoard.getGames()[0];
    let homeTeam = newGame.getHomeTeam();
    let awayTeam = newGame.getAwayTeam();
    
    expect(homeTeam.getScore().isEqualTo(scoreZero)).toBe(true);
    expect(awayTeam.getScore().isEqualTo(scoreZero)).toBe(true);
  });
});