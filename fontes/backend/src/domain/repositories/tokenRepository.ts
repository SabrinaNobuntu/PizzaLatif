import Token from '../../infra/database/sequelize/models/token.model';

class TokenRepository {
  async findAll(): Promise<Token[]> {
    return await Token.findAll();
  }

  async findById(id: number): Promise<Token | null> {
    return await Token.findByPk(id);
  }

  async findValidToken(): Promise<Token | null> {
    return await Token.findOne({ where: { expiresAt: { [Symbol.for('gt')]: new Date() } } });
  }

  async create(data: Partial<Token>): Promise<Token> {
    return await Token.create(data);
  }

  async update(id: number, data: Partial<Token>): Promise<Token | null> {
    const token = await this.findById(id);
    if (!token) return null;
    return await token.update(data);
  }

  async delete(id: number): Promise<boolean> {
    const deleted = await Token.destroy({ where: { id } });
    return deleted > 0;
  }
}

export default new TokenRepository();
