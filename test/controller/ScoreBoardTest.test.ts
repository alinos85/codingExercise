import {describe, expect, test, beforeEach} from '@jest/globals';
import { TeamRequest } from '../../src/client/TeamRequest';
import { Score } from '../../src/model/Score';
import { ScoreBoard } from '../../src/controller/ScoreBoard';

const HOMETEAM:string= 'home team';
const AWAYTEAM:string= 'away team';
const HOMETEAMTYPE:string= 'Home';
const AWAYTEAMTYPE:string= 'Away';

const HOMETEAM1:string= 'home team1';
const AWAYTEAM1:string= 'away team1';

const HOMETEAM2:string= 'home team2';
const AWAYTEAM2:string= 'away team2';

const AWAYTEAMSCORE:number=2
const HOMETEAMSCORE:number=3
const SCOREZERO:number=0;

describe('tests on Score board', () => {

  let scoreBoard:ScoreBoard;
  let homeTeamRequest:TeamRequest; 
  let awayTeamRequest:TeamRequest;

  beforeEach(() => {
    scoreBoard=new ScoreBoard();
    homeTeamRequest = new TeamRequest(HOMETEAM,HOMETEAMTYPE);
    awayTeamRequest = new TeamRequest(AWAYTEAM,AWAYTEAMTYPE);
  });
  test('when starting a game score should be initialize to 0-0 and New game added to the scoreboard', () => {
    let scoreZero = new Score(SCOREZERO);

    scoreBoard.startNewGame(homeTeamRequest,awayTeamRequest);

    expect(scoreBoard.getGames().length).toBe(1);

    
    let newGame = scoreBoard.getGames()[0];
    let homeTeam = newGame.getHomeTeam();
    let awayTeam = newGame.getAwayTeam();
    
    expect(homeTeam.getScore().isEqualTo(scoreZero)).toBe(true);
    expect(awayTeam.getScore().isEqualTo(scoreZero)).toBe(true);
  });

  test('when starting a game with wrong type of team', () => {
    let wrongHomeTeamType = 'wrong home'
    let wrongHomeTeamRequest = new TeamRequest(HOMETEAM,wrongHomeTeamType);
    let awayTeamRequest = new TeamRequest(AWAYTEAM,AWAYTEAMTYPE);

    scoreBoard.startNewGame(wrongHomeTeamRequest,awayTeamRequest);

    expect(scoreBoard.getGames().length).toBe(0);
  });

  test('Update the score of a game', () => { 
    scoreBoard.startNewGame(homeTeamRequest,awayTeamRequest);
    let homeTeamScoreRequest= new TeamRequest(HOMETEAM,HOMETEAMTYPE,HOMETEAMSCORE);
    let awayTeamScoreRequest= new TeamRequest(AWAYTEAM,AWAYTEAMTYPE,AWAYTEAMSCORE);
    scoreBoard.updateScore(homeTeamScoreRequest,awayTeamScoreRequest);

    expect(scoreBoard.getGames().length).toBe(1);

    let game = scoreBoard.getGames()[0];
    let homeTeam = game.getHomeTeam();
    let awayTeam = game.getAwayTeam();
    
    expect(homeTeam.getScore().isEqualTo(new Score(HOMETEAMSCORE))).toBe(true);
    expect(awayTeam.getScore().isEqualTo(new Score(AWAYTEAMSCORE))).toBe(true);
  });

  test('Finish a game currently in progress', () => {

    scoreBoard.startNewGame(homeTeamRequest,awayTeamRequest);
    scoreBoard.finishGame(homeTeamRequest,awayTeamRequest);

    expect(scoreBoard.getGames().length).toBe(0);
  });

  test('Test summary of games ordered by their total score 0r ordered by their started time', () => {
    //start a new game
    scoreBoard.startNewGame(homeTeamRequest,awayTeamRequest);
    
    //start second game and update its score
    let homeTeamRequest1 = new TeamRequest(HOMETEAM1,HOMETEAMTYPE);
    let awayTeamRequest1 = new TeamRequest(AWAYTEAM1,AWAYTEAMTYPE);
    scoreBoard.startNewGame(homeTeamRequest1,awayTeamRequest1);
    let homeTeamScoreRequest1= new TeamRequest(HOMETEAM1,HOMETEAMTYPE,HOMETEAMSCORE);
    let awayTeamScoreRequest1= new TeamRequest(AWAYTEAM1,AWAYTEAMTYPE,AWAYTEAMSCORE);
    scoreBoard.updateScore(homeTeamScoreRequest1,awayTeamScoreRequest1);

    //start a third game after 3 seconds
    let homeTeamRequest2 = new TeamRequest(HOMETEAM2,HOMETEAMTYPE);
    let awayTeamRequest2 = new TeamRequest(AWAYTEAM2,AWAYTEAMTYPE);
    scoreBoard.startNewGame(homeTeamRequest2,awayTeamRequest2);

    let gameSummaries = scoreBoard.getGamesSummary();

    //The second game wich has the highest number of score at the first position
    let game0 = gameSummaries[0];
    let homeTeam0 = game0.getHomeTeam();
    expect(homeTeam0.getName()).toBe(HOMETEAM1);
    expect(homeTeam0.getScore().isEqualTo(new Score(HOMETEAMSCORE))).toBe(true);
    
    //the third game wich started recently should be at the second position
    let game1 = gameSummaries[1];
    let homeTeam1 = game1.getHomeTeam();
    expect(homeTeam1.getName()).toBe(HOMETEAM2);
    expect(homeTeam1.getScore().isEqualTo(new Score(SCOREZERO))).toBe(true);
    
    //the first game should be at the last position
    let game2 = gameSummaries[2];
    let homeTeam2 = game2.getHomeTeam();
    expect(homeTeam2.getName()).toBe(HOMETEAM);
    expect(homeTeam2.getScore().isEqualTo(new Score(SCOREZERO))).toBe(true);
  });
});