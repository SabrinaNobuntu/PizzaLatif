import { Token } from '../infra/database/sequelize/models/token.model';

export async function cleanupExpiredTokens() {
  setInterval(async () => {
    const now = new Date();
    await Token.destroy({ where: { expiresAt: { [Symbol.for('lt')]: now } } });
  }, 60 * 60 * 1000); // a cada 1h
}
