
import request from 'request';

request.post('http://euclid.nmu.edu:11223/api/visits/', {
  form: {
    "rfid": "011016A269",
    "feederID": "CLIF",
    "visitTimestamp": 1521420449,
    "temperature": 44,
    "mass": 108,
    "bandCombo": "#a0/V"
  }
}, (error, status, body) => {
  console.log(error);
  console.log(status);
  console.log(body);
});