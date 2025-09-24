import config from '../../config';

class NotificationService {
  async sendNotification(message: string, userId: string) {
    // Exemplo: apenas log por enquanto
    config.logger.info(`Enviando notificação para ${userId}: ${message}`);
  }
}

export default new NotificationService();
