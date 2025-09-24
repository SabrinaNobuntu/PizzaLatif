import { Request, Response, NextFunction } from 'express';
import config from '../../../config';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const { method, url } = req;
  const timestamp = new Date().toISOString();

  config.logger.info(`[${timestamp}] ${method} ${url}`);
  next();
}
