const env = process.env;
const config = {
  db: {
    host: env.RDS_HOSTNAME,
    username: env.RDS_USERNAME,
    password: env.RDS_PASSWORD,
    database: env.RDS_DB,
    dialect: "mysql"
  }
};

module.exports = config;
