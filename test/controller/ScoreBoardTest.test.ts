import {describe, expect, test, beforeEach} from '@jest/globals';
import { TeamRequest } from '../../src/client/TeamRequest';
import { Score } from '../../src/model/Score';
import { ScoreBoard } from '../../src/controller/ScoreBoard';

const HOMETEAM:string= 'home team';
const AWAYTEAM:string= 'away team';
const HOMETEAMTYPE:string= 'Home';
const AWAYTEAMTYPE:string= 'Away';
const SCOREZERO:number=0;

describe('When starting new game', () => {

  let scoreBoard:ScoreBoard;
  let homeTeamRequest:TeamRequest; 
  let awayTeamRequest:TeamRequest;

  beforeEach(() => {
    scoreBoard=new ScoreBoard();
    homeTeamRequest = new TeamRequest(HOMETEAM,HOMETEAMTYPE,SCOREZERO);
    awayTeamRequest = new TeamRequest(AWAYTEAM,AWAYTEAMTYPE,SCOREZERO);
  });
  test('score should be initialize to 0-0 and New game added to the scoreboard', () => {
    let scoreZero = new Score(0);

    scoreBoard.startNewGame(homeTeamRequest,awayTeamRequest);

    expect(scoreBoard.getGames().length).toBe(1);

    
    let newGame = scoreBoard.getGames()[0];
    let homeTeam = newGame.getHomeTeam();
    let awayTeam = newGame.getAwayTeam();
    
    expect(homeTeam.getScore().isEqualTo(scoreZero)).toBe(true);
    expect(awayTeam.getScore().isEqualTo(scoreZero)).toBe(true);
  });

  test('Update the score of a game', () => {
    const AWAYTEAMSCORE:number=2
    const HOMETEAMSCORE:number=3
    let homeTeamScoreRequest = new TeamRequest(HOMETEAM,HOMETEAMTYPE,HOMETEAMSCORE);
    let awayTeamScoreRequest = new TeamRequest(AWAYTEAM,AWAYTEAMTYPE,AWAYTEAMSCORE);
    
    scoreBoard.startNewGame(homeTeamRequest,awayTeamRequest);
    scoreBoard.updateScore(homeTeamScoreRequest,awayTeamScoreRequest);

    expect(scoreBoard.getGames().length).toBe(1);

    
    let game = scoreBoard.getGames()[0];
    let homeTeam = game.getHomeTeam();
    let awayTeam = game.getAwayTeam();
    
    expect(homeTeam.getScore().isEqualTo(new Score(HOMETEAMSCORE))).toBe(true);
    expect(awayTeam.getScore().isEqualTo(new Score(AWAYTEAMSCORE))).toBe(true);
  });
});