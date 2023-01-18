
import { TeamRequest } from '../../src/client/TeamRequest';
import { TeamType } from '../../src/model/TeamType';
import { TeamMapper } from '../../src/mapper/TeamMapper';
import {describe, expect, test, beforeEach} from '@jest/globals';

const HOMETEAM:string= 'home team';
const AWAYTEAM:string= 'away team';
const HOMETEAMTYPE:string= 'Home';
const AWAYTEAMTYPE:string= 'Away';
const SCOREZERO:number=0;

describe('Mapping TeamRequest to HomeTeam and AwayTeam', () => {

  let teamMapper:TeamMapper;

  beforeEach(() => {
    teamMapper=new TeamMapper();
  });
  test('Should map HomeTeamRequest to HomeTeam', () => {
    let homeTeamRequest = new TeamRequest(HOMETEAM,HOMETEAMTYPE,SCOREZERO);

    let homeTeam = teamMapper.mapToTeam(homeTeamRequest);

    expect(homeTeam.getName()).toBe(HOMETEAM);
    expect(homeTeam.getType()).toBe(TeamType.Home);
  });
  test('Should map AwayTeamRequest to AwayTeam', () => {
    let awayTeamDto = new TeamRequest(AWAYTEAM,AWAYTEAMTYPE,SCOREZERO);

    let awayTeam = teamMapper.mapToTeam(awayTeamDto);

    expect(awayTeam.getName()).toBe(AWAYTEAM);
    expect(awayTeam.getType()).toBe(TeamType.Away);
  });
});