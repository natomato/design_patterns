export class Player {
  constructor(name, mediator) {
    this.name = name;
    this.points = 0;
    this.mediator = mediator;
  }

  play () {
    this.points += 1;
    this.mediator.scored();
  }
}

export class Scoreboard {
  constructor () {
    this.board = {};
  }

  update (score) {
    for (let player in score) {
      if (score.hasOwnProperty(player)) {
        this.board[player] = score[player];
      }
    }
  }
}

export class Mediator {
  constructor () {
    this.players = {
      home: new Player('Home', this),
      guest: new Player('Guest', this)
    };
    this.scoreboard = new Scoreboard();
  }

  scored () {
    var players = this.players,
        score = {
          Home: players.home.points,
          Guest: players.guest.points
        };
    this.scoreboard.update(score);
  }

  scoringEvent (source) {
    if (source === 'HOME') {
      this.players.home.play();
    }
    if (source === 'GUEST') {
      this.players.guest.play();
    }
  }
};