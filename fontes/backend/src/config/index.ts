import databaseConfig from './database';
import { openDeliveryConfig } from '../../src/config/openDelivery.config';
import logger from './logger';

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  database: databaseConfig,
  openDelivery: openDeliveryConfig,
  logger,
};

export default config;
