class LeaderBoardStorage {

  constructor() {
    if (!localStorage.getItem("leaderboards")) {
      localStorage.setItem("leaderboards", '[]');
    }
  }

  getData() {
    return JSON.parse(localStorage.getItem("leaderboards"));
  }

  update(data) {
    localStorage.setItem("leaderboards", JSON.stringify(data));
  }
}

export default LeaderBoardStorage;
