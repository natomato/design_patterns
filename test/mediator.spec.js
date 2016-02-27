import {expect} from 'chai'
import {Player, Scoreboard, Mediator} from '../src/mediator.js'

describe('Mediator Pattern', () => {
  // Firstly, this is a dumb example with little practical application.
  // The Observer pattern achieves the same result with less coupling.
  // OK so heres how it works
  // The mediator is basically a game. When a scoring event occurrs
  // the mediator checks which player it belongs to, then calls that
  // players "play" method.
  // The player in turn updates her points and notifies the mediator
  // that she has scored the point, by calling mediator.scored
  // Finally the Mediator, which is the only object aware of the scoreboard,
  // constructs a score object to update the board and passes it on.
  // The effect is that the scoreboard knows nothing about the Players.
  describe('Players', () => {

    it('has a name', () => {
      var p = new Player('home');
      expect(p.name).to.equal('home');
    });

    it('has points', () => {
      var p = new Player('home');
      expect(p.points).to.equal(0);
    });

    it('can play for more points', () => {
      var p = new Player('home', new Mediator());
      p.play();
      expect(p.points).to.equal(1);
    });
  });
  
  describe('Scoreboard', () => {

    it('keeps score', () => {
      var sb = new Scoreboard();
      expect(sb.board).to.eql({});
    });

    it('can update a players score', () => {
      var sb = new Scoreboard();
      sb.update({winner: 1, loser: 1});
      sb.update({winner: 9})
      expect(sb.board).to.eql({winner: 9, loser: 1});
    });
  });

  describe('Mediator', () => {

    it('when a scoringEvent occurrs update the scoreboard', () => {
      var m = new Mediator();
      m.scoringEvent('GUEST');
      m.scoringEvent('HOME'); //Go Home Team!
      m.scoringEvent('HOME'); //Go Home Team!
      expect(m.scoreboard.board).to.eql({Home: 2, Guest: 1})
    });
  });
});
