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

  ageOnMercury() {
    let earthAge = this.ageOnEarth();
    const mercuryMod = 0.24;
    let ageInMercYears = Math.floor(earthAge/mercuryMod);
    console.log(ageInMercYears);
    return ageInMercYears;
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
}


//Class GalacticAgeCalculator returns as unused variable and refuses to compile unless I add the following code
let birthday = new GalacticAgeCalculator(new Date());
birthday.ageOnEarth();
