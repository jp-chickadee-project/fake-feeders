
import request from 'request-promise';

start();

function start() {
  setTimeout(() => {
    submit();
    start();
  }, determineHowLongToWait());
}

function submit() {
  const visit = {
    bandCombo: 'g0/Y#', 
    feederID: 'CLIF',
    mass: 108, 
    rfid: '011016A269', 
    temperature: 444, 
    visitTimestamp: Date.now() / 1000
  }
  Api.submitVisit(visit)
  .then((result) => {
    console.log(result);
  });
}


function determineHowLongToWait() {
  const baseline = 3000;
  const random = Math.random() * 7000;
  const delay = baseline + random;
  console.log(delay)
  return delay;
}

class Api {

  static submitVisit(visit) {
    return request.post('http://euclid.nmu.edu:18155/api/visits/', {
      form: visit
    });
  }
}