export function GalacticAgeCalculator() {
  this.birthday = birthday;
}

export function age(userInputDOB) {
  let birthday = new Date(userInputDOB);
  let now = Date.now();
  let ageInMS = (now - Date.parse(birthday));
  const msInYear = 31556952000;
  let ageInYears = Math.floor(ageInMS/msInYear);
  return ageInYears;
}
