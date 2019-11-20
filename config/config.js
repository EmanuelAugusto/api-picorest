module.exports = {
  "development": {
    "username": "root",
    "password": "",
    "database": "picorestdb",
    "host": "localhost",
    "dialect": "mariadb",
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "picorestdb",
    "host": process.env.DATABASE_URL,
    "dialect": "postgres",
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "Picorestdb",
    "host": "127.0.0.1",
    "dialect": "postgres",
  }
}
