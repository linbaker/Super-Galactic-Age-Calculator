import { GalacticAgeCalculator } from './../src/super-galactic-age-calculator.js';

describe('GalacticAgeCalculator', function() {

  it('should create a GalacticAgeCalculator object', function ()
  {
    let dob = new GalacticAgeCalculatorc(new Date(1993, 8, 11));
    expect(typeof dob).toEqual(typeof new GalacticAgeCalculator);
  });

  it('should return years between current time and user inputted date of birth', function() {
    let dob = new GalacticAgeCalculator(new Date("1993, 8, 11"));
    expect(dob.age()).toEqual(25);
  });

});
