const models = require('./models/index');

async function getData() {
  const getData = await models.Bank.findAll({});
  return getData;
}

console.log(getData());