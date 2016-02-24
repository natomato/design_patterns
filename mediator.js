function Player(name) {
  this.points = 0;
  this.name = name;
}

// class Player {
//   constructor(name) {
//     this.name = name;
//     this.points = 0;
//   }

//   play () {
//     this.points += 1;
//     mediator.played();
//   }
// }

var scoreboard = {
  element: document.getElementById('results'),

  update: function (score) {
    var i, msg = '';
    for (i in score) {
      if (score.hasOwnProperty(i)) {
        msg += '<p><strong>' + i + '<\/strong>: ';
        msg += score[i];
        msg += '<\/p>';
      }
    }
    this.element.innerHTML = msg;
  }
};

// class ScoreBoard {
//   constructor(el) {
//     this.element = el;
//   }
//   update (score) {
//     let msg;
//     for (let player in score) {
//       if (score.hasOwnProperty(player)) {
//         msg = "<p><strong>${player}<\/strong>: ${score[player]}<\/p>"
//       }
//     }
//     this.element.innerHTML = msg;
//   }
// };

var mediator = {
  players: {},

  setup: function () {
    var players = this.players;
    players.home = new Player('Home');
    players.guest = new Player('Guest');
  },

  played: function () {
    var players = this.players,
        score = {
          Home: players.home.points,
          Guest: players.guest.points
        };
    scoreboard.update(score);
  },

  keypress: function (e) {
    e = e || window.event;
    if (e.which === 49) { //Key '1'
      mediator.players.home.play();
      return;
    }
    if (e.which === 48) { //Key '0'
      mediator.players.guest.play();
      return;
    }
  }
};

//Setup
mediator.setup();
window.onkeypress = mediator.keypress;

//10 second game
setTimeout(function () {
  window.onkeypress = null;
  alert('Game Over!');
}, 10000);