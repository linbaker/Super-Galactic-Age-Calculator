import { age } from './../src/super-galactic-age-calculator.js';

describe('age', function() {
  it('should return years between current time and user inputted date of birth', function() {
    let dob = new Date(1993, 8, 11);
    expect(age(dob)).toEqual(25);
  });
});
