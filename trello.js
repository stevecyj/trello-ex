const _ = require('lodash');
const fs = require('fs');
fs.readFile('./assets/9wmu2tw6.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  let objData = JSON.parse(data);
  let trelloCARDS = objData.cards;
  let monthCARDS = _.groupBy(
    trelloCARDS,
    ({ dateLastActivity }) => new Date(Date.parse(dateLastActivity)).getMonth() + 1
  );
  console.log(monthCARDS);
});

let utc = Date.parse('2021-08-14T04:54:54.962Z');
const d = new Date(utc);
const M = d.getMonth() + 1;

// console.log(M);
// console.log(d);
// console.log(d.toUTCString());
// console.log(d.toISOString());
