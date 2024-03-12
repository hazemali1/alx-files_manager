import { MongoClient } from 'mongodb';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_DATABASE = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${DB_HOST}:${DB_PORT}`;

class DBClient {
  constructor() {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    });
  }

  isAlive() {
	  return !!this.db;
  }

  async nbUsers() {
	  return this.users.countDocuments();
  }

  async nbFiles() {
	  return this.files.countDocuments();
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
