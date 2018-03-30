
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

}, 2000);


class Api {

  static submitVisit(visit) {
    return request.post('http://euclid.nmu.edu:18155/api/visits/', {
      form: visit
    });
  }
}