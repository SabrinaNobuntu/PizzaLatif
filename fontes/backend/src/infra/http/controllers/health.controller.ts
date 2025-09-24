import { Request, Response } from 'express';
import config from '../../../config';

class HealthController {
  async check(req: Request, res: Response) {
    try {
      // Aqui você pode checar DB, serviços externos etc.
      res.status(200).json({
        status: 'ok',
        env: config.env,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      config.logger.error('Health check failed', error);
      res.status(500).json({ status: 'error' });
    }
  }
}

export default new HealthController();
