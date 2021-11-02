const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/Forecast';
const DB_NAME = 'Forecast';

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
    }));

module.exports = connection;
