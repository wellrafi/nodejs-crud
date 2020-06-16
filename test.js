const models = require('./models/index');
const { v4: uuidv4 } = require('uuid');

async function getData() {
  await models.Kategori.create({
    id: uuidv4(),
    nama: "asdf asd fnama",
    createdAt: Date.now(),
    updatedAt: Date.now()
  })
  const getData = await models.Kategori.findAll();
  console.log(getData);
}

getData();