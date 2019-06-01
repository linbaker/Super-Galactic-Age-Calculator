export class GalacticAgeCalculator {
  constructor(birthday) {
    this.birthday = birthday;
  }

  age() {
    let birthdate = new Date(this.birthday);
    let now = Date.now();
    let ageInMS = (now - Date.parse(birthdate));
    const msInYear = 31556952000;
    let ageInYears = Math.floor(ageInMS/msInYear);
    return ageInYears;
  }
}


//Class GalacticAgeCalculator returns as unused variable and refuses to compile unless I add the following code
let birthday = new GalacticAgeCalculator(new Date());
birthday.age();
