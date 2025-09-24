import Merchant from '../../infra/database/sequelize/models/merchant.model';

class MerchantRepository {
  async findAll(): Promise<Merchant[]> {
    return await Merchant.findAll();
  }

  async findById(id: string): Promise<Merchant | null> {
    return await Merchant.findByPk(id);
  }

  async create(data: Partial<Merchant>): Promise<Merchant> {
    return await Merchant.create(data);
  }

  async update(id: string, data: Partial<Merchant>): Promise<Merchant | null> {
    const merchant = await this.findById(id);
    if (!merchant) return null;
    return await merchant.update(data);
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await Merchant.destroy({ where: { id } });
    return deleted > 0;
  }
}

export default new MerchantRepository();
