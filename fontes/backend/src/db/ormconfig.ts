import { SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config();

const ormconfig: SequelizeOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'opendelivery',
  dialect: 'postgres',
  models: [__dirname + '/../models/*.model.ts'],
  logging: false,
};

export default ormconfig;
