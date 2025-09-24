import { Request, Response } from 'express';
import merchantService from '../../../domain/services/merchantService';
import config from '../../../config';

class MerchantsController {
  // GET /merchants
  async getAll(req: Request, res: Response) {
    try {
      const merchants = await merchantService.getMerchants();
      res.status(200).json(merchants);
    } catch (error) {
      config.logger.error('Error fetching merchants', error);
      res.status(500).json({ error: 'Error fetching merchants' });
    }
  }

  // GET /merchants/:id
  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const merchant = await merchantService.getMerchantById(id);
      res.status(200).json(merchant);
    } catch (error) {
      config.logger.error(`Error fetching merchant ${req.params.id}`, error);
      res.status(500).json({ error: 'Error fetching merchant' });
    }
  }
}

export default new MerchantsController();
