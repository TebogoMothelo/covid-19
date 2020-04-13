const calculatesImpact = (impact) => {
  let population = document.getElementById('population').value;
  let timeToElapse = document.getElementById('time').value;
  let reportedCases = document.getElementById('reported').value;
  let totalHospitalBeds = document.getElementById('hospitals').value;
  let periodType = document.getElementById('period').value;
  let duration;

  const occupied = 0.65 * totalHospitalBeds;
  const emptyBeds = totalHospitalBeds - occupied;
  if (periodType === 'days') {
    duration = timeToElapse;
  }
  if (periodType === 'weeks') {
    duration = timeToElapse * 7;
  }
  if (periodType === 'months') {
    duration = timeToElapse * 30;
  }

  const infected = reportedCases * impact;
  const infectedAtTime = infected * 2 ** parseInt(duration / 3, 10);
  const severeCases = parseInt(infectedAtTime * 0.15, 10);
  const hospitalBeds = parseInt(emptyBeds - severeCases, 10);

  return [infected, infectedAtTime, severeCases, hospitalBeds];
};
const covid19ImpactEstimator = () => {
  const impacts = calculatesImpact(10);
  const severeImpacts = calculatesImpact(50);

  return (
    (document.getElementById('impactR').innerHTML = `Impacts ${impacts}`),
    (document.getElementById(
      'severeimpact'
    ).innerHTML = `Severe Impacts ${severeImpacts}`)
  );
};

export default covid19ImpactEstimator;
0;
