class Stats {
  constructor(id, user, data) {
    this.id = id;
    this.user = user;
    this.data = data;
  }
  getData(id = this.id) {
    return this.data.filter(user => user.userID === id);
  }
  getAllTimeAvg(key) {
    const total = this.user.reduce((total, day) => {
      total += day[key];
      return total;
    }, 0);
    return parseFloat((total / this.user.length).toFixed(1));
  }
}
