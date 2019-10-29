import {expect} from 'chai';
import Stats from '../src/Stats';

describe('Stats', () => {
  let data, data2, stats;

  beforeEach(() => {
    data = [
        {
          "id": 1,
          "name": "Luisa Hane",
          "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
          "email": "Diana.Hayes1@hotmail.com",
          "strideLength": 4.3,
          "dailyStepGoal": 10000,
          "friends": [
            16,
            4,
            8
          ]
        }
       ];
    data2 =
    [
      { "userID": 13, "date": "2019/08/18", "numSteps": 1242, "minutesActive": 64, "flightsOfStairs": 16 },
      { "userID": 13, "date": "2019/08/19", "numSteps": 3425, "minutesActive": 112, "flightsOfStairs": 4 },
      { "userID": 13, "date": "2019/08/20", "numSteps": 5321, "minutesActive": 140, "flightsOfStairs": 174 },
      { "userID": 13, "date": "2019/08/21", "numSteps": 12, "minutesActive": 846, "flightsOfStairs": 24 },
      { "userID": 13, "date": "2019/08/22", "numSteps": 3455, "minutesActive": 836, "flightsOfStairs": 18 },
      { "userID": 13, "date": "2019/08/23", "numSteps": 5321, "minutesActive": 134, "flightsOfStairs": 85 },
      { "userID": 13, "date": "2019/08/24", "numSteps": 2948, "minutesActive": 456, "flightsOfStairs": 162 },
      { "userID": 13, "date": "2019/08/25", "numSteps": 9352, "minutesActive": 567, "flightsOfStairs": 143 },
      { "userID": 2, "date": "2019/06/15", "numSteps": 1112, "minutesActive": 875, "flightsOfStairs": 16 },
      { "userID": 2, "date": "2019/06/16", "numSteps": 3253, "minutesActive": 174, "flightsOfStairs": 52 },
      { "userID": 5, "date": "2019/08/25", "numSteps": 6425, "minutesActive": 67, "flightsOfStairs": 42 },
      { "userID": 6, "date": "2019/08/25", "numSteps": 842, "minutesActive": 43, "flightsOfStairs": 86 },
    ];
    stats = new Stats(data, 1);
  });

  it('should be an instance of Stats', () => {
    expect(stats).to.be.an.instanceOf(Stats);
  });

  it('should filter the information about the user by their id', () => {
    expect(stats.getData()).to.eql(data);
  });

  it('should be able to get an average from the application for the user activity based on the id and the type of activity', () => {
    stats = new Stats(data2, 13);
    expect(stats.getAllTimeAvg('numSteps')).to.equal(3884.5);
  });
});