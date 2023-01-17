
import { TeamDto } from '../../src/client/TeamDto';
import { Team } from '../../src/model/Team';
import { TeamType } from '../../src/model/TeamType';
import { TeamMapper } from '../../src/mapper/TeamMapper';
import {describe, expect, test, beforeEach} from '@jest/globals';

const HOMETEAM:string= 'home team';
const AWAYTEAM:string= 'away team';
const HOMETEAMTYPE:string= 'Home';
const AWAYTEAMTYPE:string= 'Away';

describe('Mapping TeamDto to HomeTeam and AwayTeam', () => {

  let teamMapper:TeamMapper;

  beforeEach(() => {
    teamMapper=new TeamMapper();
  });
  test('Should map HomeTeamDto to HomeTeam', () => {
    let homeTeamDto = new TeamDto(HOMETEAM,HOMETEAMTYPE);

    let homeTeam = teamMapper.mapToTeam(homeTeamDto);

    expect(homeTeam.getName()).toBe(HOMETEAM);
    expect(homeTeam.getType()).toBe(TeamType.Home);
  });
  test('Should map AwayTeamDto to AwayTeam', () => {
    let awayTeamDto = new TeamDto(AWAYTEAM,AWAYTEAMTYPE);

    let awayTeam = teamMapper.mapToTeam(awayTeamDto);

    expect(awayTeam.getName()).toBe(AWAYTEAM);
    expect(awayTeam.getType()).toBe(TeamType.Away);
  });
});