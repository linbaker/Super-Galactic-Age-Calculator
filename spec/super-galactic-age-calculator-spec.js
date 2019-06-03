import { GalacticAgeCalculator } from './../src/super-galactic-age-calculator.js';

describe('GalacticAgeCalculator', function() {

  it('should instantiate a GalacticAgeCalculator object', function (){
    let dob = new GalacticAgeCalculator(new Date(1993, 8, 11));
    expect(typeof dob).toEqual(typeof new GalacticAgeCalculator);
  });

  it('should return years between current time and user inputted date of birth', function() {
    let dob = new GalacticAgeCalculator(new Date(1993, 8, 11));
    expect(dob.ageOnEarth()).toEqual(25);
    expect(dob.ageOnEarth()).not.toEqual(20);
  });

  it('should return Mercury solar years between current time and user inputted date of birth', function() {
    let dob = new GalacticAgeCalculator(new Date(1993, 8, 11));
    expect(dob.ageOnMercury()).toEqual(104);
    expect(dob.ageOnMercury()).not.toEqual(20);
  });

  it('should return Venus solar years between current time and user inputted date of birth', function() {
    let dob = new GalacticAgeCalculator(new Date(1993, 8, 11));
    expect(dob.ageOnVenus()).toEqual(40);
    expect(dob.ageOnVenus()).not.toEqual(20);
  });

  it('should return Mars solar years between current time and user inputted date of birth', function() {
    let dob = new GalacticAgeCalculator(new Date(1993, 8, 11));
    expect(dob.ageOnMars()).toEqual(13);
    expect(dob.ageOnMars()).not.toEqual(20);
  });

  it('should return Jupiter solar years between current time and user inputted date of birth', function() {
    let dob = new GalacticAgeCalculator(new Date(1993, 8, 11));
    expect(dob.ageOnJupiter()).toEqual(2);
    expect(dob.ageOnJupiter()).not.toEqual(20);
  });

  it('should return amount of years left based on average life expectancy', function() {
    let dob = new GalacticAgeCalculator(new Date(1993, 8, 11));
    expect(dob.yearsLeft()).toEqual(46);
    expect(dob.yearsLeft()).not.toEqual(20);
  });

  it('should return life expectancy on Mercury', function() {
    let dob = new GalacticAgeCalculator(new Date(1993, 8, 11));
    let dob2 = new GalacticAgeCalculator(new Date(1920, 1, 1));
    expect(dob.yearsLeftMercury()).toEqual("You are 104 years old on Mercury. You have 191 Mercury solar years left before you kick the bucket!");
    expect(dob.yearsLeftMercury()).not.toEqual("You are 109 years old on Mercury. You have 1 Mercury solar years left before you kick the bucket!");
    expect(dob2.yearsLeftMercury()).toEqual("You are 412 years old on Mercury. You have over stayed your welcome on Mercury by 117 Mercury solar years.");
  });

  it('should return life expectancy on Venus', function() {
    let dob = new GalacticAgeCalculator(new Date(1993, 8, 11));
    let dob2 = new GalacticAgeCalculator(new Date(1920, 1, 1));
    expect(dob.yearsLeftVenus()).toEqual("You are 40 years old on Venus. You have 74 Venus solar years left before you kick the bucket!");
    expect(dob.yearsLeftVenus()).not.toEqual("You are 109 years old on Venus. You have 1 Venus solar years left before you kick the bucket!");
    expect(dob2.yearsLeftVenus()).toEqual("You are 159 years old on Venus. You have over stayed your welcome on Venus by 46 Venus solar years.");
  });
});
