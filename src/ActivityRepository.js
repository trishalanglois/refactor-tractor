import Stats from '../src/Stats';

class ActivityRepository extends Stats {
  constructor(data, id) {
    super(data, id);
    this.id = id;
    this.data = data;
    this.user = this.getUserLogs();
  }

  getUserLogs() {
    return this.activityData.filter(user => user.userID === this.id);
  }

  getUserDate(date) {
    return this.user.find(log => log.date === date);
  }

  getFilteredDate(date) {
    return this.activityData.filter(log => log.date === date);
  }

  getDistanceWalked(date, user, measurement) {
    const miles = (user.strideLength * this.getUserDate(date).numSteps) / 5280;
    let kilometers = parseFloat((miles * 1.609).toFixed(1));
    if (measurement === 'miles') {
      return parseFloat(miles.toFixed(1));
    } else {
        return parseFloat(kilometers.toFixed(1));
      }
  }

  getMinutesActive(date) {
    return this.getUserDate(date).minutesActive;
  }

  getAverageActivity(date) {
    const i = this.user.findIndex(log => log.date === date);
    const week = this.user.slice(i - 6, i + 1);
    const totalMinutes = week.reduce((totalHours, log) => {
      totalHours += log.minutesActive;
      return totalHours;
    }, 0);
    return Math.round(totalMinutes / week.length);
  }

  reachedDailyStepGoal(date, user) {
    const stepGoal = user.dailyStepGoal;
    return this.getUserDate(date) >= stepGoal;
  }

  getAllTimeExceededSteps(user) {
    let exceededStepGoalDates = this.user.filter(log => {
      return log.numSteps >= user.dailyStepGoal;
    });
    return exceededStepGoalDates.map(log => {
      return { "date": log.date, "numSteps": log.numSteps };
    });
  }

  getAllTimeStairClimb() {
    const maxFlightsClimbed = this.user.find(log => {
      return log.flightsOfStairs === Math.max.apply(Math, this.user.map(log => {
        return log.flightsOfStairs;
      }));
    });
    return {
      "date": maxFlightsClimbed.date,
      "flightsOfStairs": maxFlightsClimbed.flightsOfStairs
    };
  }

  getAverageDay(date, key) {
    const filteredDate = this.getFilteredDate(date);
    const totalStat = filteredDate.reduce((total, log) => {
      total += log[key];
      return total;
    }, 0);
    return Math.round(totalStat / filteredDate.length);
  }

  getDailyStats(date, detail) {
    return this.getUserDate(date)([detail]);
  }

  getWeeklyStats(date) {
    const index = this.user.findIndex(log => log.date === date);
    return this.user.slice(index - 6, index + 1);
  }

  getPositiveStepTrends() {
    return this.user.reduce((acc, day, index) => {
      if (index < 2) {
        return acc;
      }
      if ((day.numSteps > this.user[index - 1].numSteps) &&
        (this.user[index - 1].numSteps > this.user[index - 2].numSteps)) {
        acc.push(day.date);
      }
      return acc;
    }, []);
  }

  getNegativeStepTrends() {
    return this.user.reduce((acc, day, index) => {
      if (index < 2) {
        return acc;
      }
      if ((day.numSteps < this.user[index - 1].numSteps) &&
        (this.user[index - 1].numSteps < this.user[index - 2].numSteps)) {
        acc.push(day.date);
      }
      return acc;
    }, []);
  }
}

export default ActivityRepository;
