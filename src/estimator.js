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

  return [infected, infectedAtTime, severeCases,hospitalBeds]
}
const covid19ImpactEstimator = () => {
  const impacts = calculatesImpact(10);
  const severeImpacts = calculatesImpact(50);

  return document.getElementById("impactR").innerHTML=`Impacts: 
  infections: ${impacts[0]},
   InfectionsByRequestedTime: ${impacts[1]},
   SevereCases: ${impacts[2]},
   Avalaible Hospital beds: ${impacts[3]}`,
  document.getElementById("severeimpact").innerHTML=`Severe Impacts:
  infections: ${severeImpacts[0]},
  InfectionsByRequestedTime: ${severeImpacts[1]},
  SevereCases: ${severeImpacts[2]},
  Avalaible Hospital beds: ${severeImpacts[3]}`;
 
};

