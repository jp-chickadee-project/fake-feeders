
import request from 'request-promise';
import * as _ from 'lodash';

import visits from './dataset';

start();

function start() {
  setTimeout(() => {
    submit();
    start();
  }, determineHowLongToWait());
}

function submit() {
  const i = _.random(0, visits.length);
  const visit = visits[i];
  visit.visitTimestamp = Date.now() / 1000;
  console.log(`timestamp=${visit.visitTimestamp} feeder=${visit.feederID} bird=${visit.rfid}`);
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