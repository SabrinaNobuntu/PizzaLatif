// src/logger.ts
import pino from 'pino';

// cria um logger básico com níveis e timestamps
export const logger = pino({
  transport: {
    target: 'pino-pretty', // deixa formatado no console
    options: { colorize: true },
  },
  level: process.env.LOG_LEVEL || 'info',
});

export default logger;
