
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEFAULT_TENANT_DATABASE_USERNAME,
    password: process.env.DEFAULT_TENANT_DATABASE_PASSWORD,
    database: process.env.DEFAULT_TENANT_DATABASE_NAME,
    host: process.env.DEFAULT_TENANT_DATABASE_HOST,
    port: process.env.DEFAULT_TENANT_DATABASE_PORT,
    dialect: process.env.DEFAULT_TENANT_DATABASE_TYPE || 'postgres'
  },
  test: {
    username: process.env.DEFAULT_TENANT_DATABASE_USERNAME,
    password: process.env.DEFAULT_TENANT_DATABASE_PASSWORD,
    database: process.env.DEFAULT_TENANT_DATABASE_NAME,
    host: process.env.DEFAULT_TENANT_DATABASE_HOST,
    port: process.env.DEFAULT_TENANT_DATABASE_PORT,
    dialect: process.env.DEFAULT_TENANT_DATABASE_TYPE || 'postgres'
  },
  production: {
    username: process.env.DEFAULT_TENANT_DATABASE_USERNAME,
    password: process.env.DEFAULT_TENANT_DATABASE_PASSWORD,
    database: process.env.DEFAULT_TENANT_DATABASE_NAME,
    host: process.env.DEFAULT_TENANT_DATABASE_HOST,
    port: process.env.DEFAULT_TENANT_DATABASE_PORT,
    dialect: process.env.DEFAULT_TENANT_DATABASE_TYPE || 'postgres'
  }
};
