const connection = require('./connection');

const exists = async ({ city }) => {
  const db = await connection();
  const rain = await db.collection('rain').findOne({ city });
  return rain;
};

const getAll = async () => {
  const db = await connection();
  const rain = await db.collection('rain').find().toArray();
  return rain;
};

const create = async (city, hours, status) => {
  const db = await connection();
  const inserted = await db.collection('rain').insertOne({ city, hours, status });
  console.log(inserted)
  return inserted;
};

module.exports = { exists, getAll, create };
