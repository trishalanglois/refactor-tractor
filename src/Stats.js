class Stats {
  constructor(id, data) {
    this.id = id;
    this.data = data;
    this.user = this.getData();
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

export default Stats;
