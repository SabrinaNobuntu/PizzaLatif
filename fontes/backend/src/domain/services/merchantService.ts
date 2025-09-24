import openDeliveryClient from '../../clients/openDeliveryClient';
import { Merchant } from '../../infra/database/sequelize/models/merchant.model';

class MerchantService {
  async getMerchants(): Promise<Merchant[]> {
    return await openDeliveryClient.get<Merchant[]>('/merchants');
  }

  async getMerchantById(id: string): Promise<Merchant> {
    return await openDeliveryClient.get<Merchant>(`/merchants/${id}`);
  }
}

export default new MerchantService();
