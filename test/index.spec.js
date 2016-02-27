import {expect} from 'chai'
import {Player} from '../src/index.js'

describe('Index', () => {
  it('Players have a name', () => {
    var p = new Player('Tooters', 'McButt');
    expect(p.name).to.equal('Tooters McButt');
  });
});
