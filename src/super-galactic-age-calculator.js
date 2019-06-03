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
}


//Class GalacticAgeCalculator returns as unused variable and refuses to compile unless I add the following code
let birthday = new GalacticAgeCalculator(new Date());
birthday.ageOnEarth();
