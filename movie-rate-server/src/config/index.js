const config = {
    pgUser: process.env.POSTGRES_USER,
    pgDatabase: process.env.POSTGRES_DB,
    pgPassword: process.env.POSTGRES_PASSWORD,
    pgPort: process.env.POSTGRES_PORT,
    pgHost: process.env.POSTGRES_HOST
  };
  
  module.exports = config;