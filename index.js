
import request from 'request-promise';

setInterval(() => {

  const visit = {
    bandCombo: 'g0/Y#', 
    feederID: 'CLIF',
    isSynced: 0, 
    mass: 108, 
    rfid: '011016A269', 
    temperature: 444, 
    visitTimestamp: Date.now() / 1000
  }

  Api.submitVisit(visit)
  .then((result) => {
    console.log(result);
  });

}, determineHowLongToWait());


function determineHowLongToWait() {
  const baseline = 1000;
  const random = Math.random() * 3000;
  return baseline + random;
}

class Api {

  static submitVisit(visit) {
    return request.post('http://euclid.nmu.edu:18155/api/visits/', {
      form: visit
    });
  }
}