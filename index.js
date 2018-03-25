
import request from 'request-promise';

// grab a list of all feeders
// grab a list of all birds
// grab the most recent visit
// submit fake visits filling in latest visit to now

setInterval(() => {

  const visit = {
    bandCombo: 'g0/Y#', 
    feederID: 'CLIF',
    isSynced: 1, 
    mass: 108, 
    rfid: '011016A269', 
    temperature: 444, 
    visitTimestamp: Date.now() / 1000
  }

  Api.submitVisit(visit)
  .then((result) => {
    console.log(result);
  });

}, 5000);


class Api {

  static submitVisit(visit) {
    return request.post('http://euclid.nmu.edu:18155/api/visits/', {
      form: visit
    });
  }
}