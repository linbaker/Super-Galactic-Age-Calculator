export class GalacticAgeCalculator {
  constructor(birthday) {
    this.birthday = birthday;
  }

  ageOnEarth() {
    let birthdate = new Date(this.birthday);
    let now = Date.now();
    let ageInMS = (now - Date.parse(birthdate));
    const msInYear = 31556952000;
    let ageInYears = Math.floor(ageInMS/msInYear);
    return ageInYears;
  }

  yearsLeft() {
    let years = this.ageOnEarth();
    const avgLifeExp = 71;
    let yearsRemaining = avgLifeExp - years;
    return yearsRemaining;
  }

  ageOnMercury() {
    let earthAge = this.ageOnEarth();
    const mercuryMod = 0.24;
    let ageInMercYears = Math.floor(earthAge/mercuryMod);
    console.log(ageInMercYears);
    return ageInMercYears;
  }

  yearsLeftMercury() {
    const mercuryMod = 0.24;
    let mercuryYearsLeft = Math.floor(this.yearsLeft()/mercuryMod);
    if (mercuryYearsLeft < 0) {
      let mercuryReturn = `You are ${this.ageOnMercury()} years old on Mercury. You have over stayed your welcome on Mercury by ${Math.abs(mercuryYearsLeft)} Mercury solar years.`;
      return mercuryReturn;
    }
    let mercuryReturn = `You are ${this.ageOnMercury()} years old on Mercury. You have ${mercuryYearsLeft} Mercury solar years left before you kick the bucket!`;
    return mercuryReturn;
  }

  ageOnVenus() {
    let earthAge = this.ageOnEarth();
    const venusMod = 0.62;
    let ageInVenusYears = Math.floor(earthAge/venusMod);
    console.log(ageInVenusYears);
    return ageInVenusYears;
  }

  ageOnMars() {
    let earthAge = this.ageOnEarth();
    const marsMod = 1.88;
    let ageInMarsYears = Math.floor(earthAge/marsMod);
    console.log(ageInMarsYears);
    return ageInMarsYears;
  }

  ageOnJupiter() {
    let earthAge = this.ageOnEarth();
    const jupMod = 11.86;
    let ageInJupiterYears = Math.floor(earthAge/jupMod);
    console.log(ageInJupiterYears);
    return ageInJupiterYears;
  }
}


//Class GalacticAgeCalculator returns as unused variable and refuses to compile unless I add the following code
let birthday = new GalacticAgeCalculator(new Date());
birthday.ageOnEarth();
